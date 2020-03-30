/**
 * Created by conta on 8/17/2017.
 */
/* Dashboard Recent Activty */
/* $(function() {
    var $tabMenu = $(".widget-activity .widget-head ul li a");

        $tabMenu.on('shown.bs.tab', function (e) {
            var $this = $(this),
                href     = $this.attr("href"),
                id       = href.replace("#", "")

                // .tab-pane [this a hrefs]
                $this.addClass("active");
                $this.closest("li").removeClass("active");

                // a hrefs siblings
                $this.closest("li").siblings().removeClass("active");
                $this.closest("li").siblings().find("a").removeClass("active");

                // .tab-content
                $(href).siblings().removeClass("active");
                $(href).addClass("active");

        });
}); */

/* Animations Init */
function animationsInit() {
    $('.panel-3d').find('.front .btn').on('click', function(){
        $(this).closest('.panel-3d').addClass('panel-flip');
    }).end()
        .find('.back .btn').on('click', function(){
        $(this).closest('.panel-3d').removeClass('panel-flip');
    });

    // disable animations on touch devices
    if (Modernizr.touch)
    {
        $('.panel-3d')
            .css('visibility', 'visible')
            .find('[class*="icon-"]')
            .css('visibility', 'visible');
        return;
    }

    // disable animations if browser doesn't support css transitions & 3d transforms
    if (!$('html.csstransitions.csstransforms3d').length)
        return;

    $('.panel-3d')
        .addClass('flip-default')
        .each(function(i){
            var t = $(this);
            setTimeout(function(){
                t.css('visibility', 'visible').addClass('animated fadeInLeft');
            }, (i+1)*300);
            setTimeout(function(){
                t.removeClass('flip-default fadeInLeft');
                setTimeout(function(){
                    t.find('[class*="icon-"]').css('visibility', 'visible').addClass('animated fadeInDown');
                }, (i+1)*200);
            }, (i+1)*800);
        });
}

/* Holder Init */
function holderInit() {
    /*

     Holder - 1.9 - client side image placeholders
     (c) 2012-2013 Ivan Malopinsky / http://imsky.co

     Provided under the Apache 2.0 License: http://www.apache.org/licenses/LICENSE-2.0
     Commercial use requires attribution.

     */

    var Holder = Holder || {};
    (function (app, win) {

        var preempted = false,
            fallback = false,
            canvas = document.createElement('canvas');

        //getElementsByClassName polyfill
        document.getElementsByClassName||(document.getElementsByClassName=function(e){var t=document,n,r,i,s=[];if(t.querySelectorAll)return t.querySelectorAll("."+e);if(t.evaluate){r=".//*[contains(concat(' ', @class, ' '), ' "+e+" ')]",n=t.evaluate(r,t,null,0,null);while(i=n.iterateNext())s.push(i)}else{n=t.getElementsByTagName("*"),r=new RegExp("(^|\\s)"+e+"(\\s|$)");for(i=0;i<n.length;i++)r.test(n[i].className)&&s.push(n[i])}return s})

        //getComputedStyle polyfill
        window.getComputedStyle||(window.getComputedStyle=function(e,t){return this.el=e,this.getPropertyValue=function(t){var n=/(\-([a-z]){1})/g;return t=="float"&&(t="styleFloat"),n.test(t)&&(t=t.replace(n,function(){return arguments[2].toUpperCase()})),e.currentStyle[t]?e.currentStyle[t]:null},this})

        //http://javascript.nwbox.com/ContentLoaded by Diego Perini with modifications
        function contentLoaded(n,t){var l="complete",s="readystatechange",u=!1,h=u,c=!0,i=n.document,a=i.documentElement,e=i.addEventListener?"addEventListener":"attachEvent",v=i.addEventListener?"removeEventListener":"detachEvent",f=i.addEventListener?"":"on",r=function(e){(e.type!=s||i.readyState==l)&&((e.type=="load"?n:i)[v](f+e.type,r,u),!h&&(h=!0)&&t.call(n,null))},o=function(){try{a.doScroll("left")}catch(n){setTimeout(o,50);return}r("poll")};if(i.readyState==l)t.call(n,"lazy");else{if(i.createEventObject&&a.doScroll){try{c=!n.frameElement}catch(y){}c&&o()}i[e](f+"DOMContentLoaded",r,u),i[e](f+s,r,u),n[e](f+"load",r,u)}};

        //https://gist.github.com/991057 by Jed Schmidt with modifications
        function selector(a){
            a=a.match(/^(\W)?(.*)/);var b=document["getElement"+(a[1]?a[1]=="#"?"ById":"sByClassName":"sByTagName")](a[2]);
            var ret=[]; b!=null&&(b.length?ret=b:b.length==0?ret=b:ret=[b]);    return ret;
        }

        //shallow object property extend
        function extend(a,b){var c={};for(var d in a)c[d]=a[d];for(var e in b)c[e]=b[e];return c}

        //hasOwnProperty polyfill
        if (!Object.prototype.hasOwnProperty)
            Object.prototype.hasOwnProperty = function(prop) {
                var proto = this.__proto__ || this.constructor.prototype;
                return (prop in this) && (!(prop in proto) || proto[prop] !== this[prop]);
            }

        function text_size(width, height, template) {
            var dimension_arr = [height, width].sort();
            var maxFactor = Math.round(dimension_arr[1] / 16),
                minFactor = Math.round(dimension_arr[0] / 16);
            var text_height = Math.max(template.size, maxFactor);
            return {
                height: text_height
            }
        }

        function draw(ctx, dimensions, template, ratio) {
            var ts = text_size(dimensions.width, dimensions.height, template);
            var text_height = ts.height;
            var width = dimensions.width * ratio,
                height = dimensions.height * ratio;
            var font = template.font ? template.font : "sans-serif";
            canvas.width = width;
            canvas.height = height;
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillStyle = template.background;
            ctx.fillRect(0, 0, width, height);
            ctx.fillStyle = template.foreground;
            ctx.font = "bold " + text_height + "px " + font;
            var text = template.text ? template.text : (dimensions.width + "x" + dimensions.height);
            if (ctx.measureText(text).width / width > 1) {
                text_height = template.size / (ctx.measureText(text).width / width);
            }
            //Resetting font size if necessary
            ctx.font = "bold " + (text_height * ratio) + "px " + font;
            ctx.fillText(text, (width / 2), (height / 2), width);
            return canvas.toDataURL("image/png");
        }

        function render(mode, el, holder, src) {
            var dimensions = holder.dimensions,
                theme = holder.theme,
                text = holder.text ? decodeURIComponent(holder.text) : holder.text;
            var dimensions_caption = dimensions.width + "x" + dimensions.height;

            theme = (text ? extend(theme, {
                    text: text
                }) : theme);
            theme = (holder.font ? extend(theme, {
                    font: holder.font
                }) : theme);

            if (mode == "image") {
                el.setAttribute("data-src", src);
                el.setAttribute("alt", text ? text : theme.text ? theme.text + " [" + dimensions_caption + "]" : dimensions_caption);

                if (fallback || !holder.auto) {
                    el.style.width = dimensions.width + "px";
                    el.style.height = dimensions.height + "px";
                }

                if (fallback) {
                    el.style.backgroundColor = theme.background;

                } else {
                    el.setAttribute("src", draw(ctx, dimensions, theme, ratio));
                }
            } else {
                if (!fallback) {
                    el.style.backgroundImage = "url(" + draw(ctx, dimensions, theme, ratio) + ")";
                    el.style.backgroundSize = dimensions.width + "px " + dimensions.height + "px";
                }
            }
        };

        function fluid(el, holder, src) {
            var dimensions = holder.dimensions,
                theme = holder.theme,
                text = holder.text;
            var dimensions_caption = dimensions.width + "x" + dimensions.height;
            theme = (text ? extend(theme, {
                    text: text
                }) : theme);

            var fluid = document.createElement("div");

            if (el.fluidRef) {
                fluid = el.fluidRef;
            }

            fluid.style.backgroundColor = theme.background;
            fluid.style.color = theme.foreground;
            fluid.className = el.className + " holderjs-fluid";
            fluid.style.width = holder.dimensions.width + (holder.dimensions.width.indexOf("%") > 0 ? "" : "px");
            fluid.style.height = holder.dimensions.height + (holder.dimensions.height.indexOf("%") > 0 ? "" : "px");
            fluid.id = el.id;

            el.style.width = 0;
            el.style.height = 0;

            if (!el.fluidRef) {

                if (theme.text) {
                    fluid.appendChild(document.createTextNode(theme.text))
                } else {
                    fluid.appendChild(document.createTextNode(dimensions_caption))
                    fluid_images.push(fluid);
                    setTimeout(fluid_update, 0);
                }

            }

            el.fluidRef = fluid;
            el.parentNode.insertBefore(fluid, el.nextSibling)

            if (window.jQuery) {
                jQuery(function ($) {
                    $(el).on("load", function () {
                        el.style.width = fluid.style.width;
                        el.style.height = fluid.style.height;
                        $(el).show();
                        $(fluid).remove();
                    });
                })
            }
        }

        function fluid_update() {
            for (i in fluid_images) {
                if (!fluid_images.hasOwnProperty(i)) continue;
                var el = fluid_images[i],
                    label = el.firstChild;

                el.style.lineHeight = el.offsetHeight + "px";
                label.data = el.offsetWidth + "x" + el.offsetHeight;
            }
        }

        function parse_flags(flags, options) {

            var ret = {
                theme: settings.themes.gray
            }, render = false;

            for (sl = flags.length, j = 0; j < sl; j++) {
                var flag = flags[j];
                if (app.flags.dimensions.match(flag)) {
                    render = true;
                    ret.dimensions = app.flags.dimensions.output(flag);
                } else if (app.flags.fluid.match(flag)) {
                    render = true;
                    ret.dimensions = app.flags.fluid.output(flag);
                    ret.fluid = true;
                } else if (app.flags.colors.match(flag)) {
                    ret.theme = app.flags.colors.output(flag);
                } else if (options.themes[flag]) {
                    //If a theme is specified, it will override custom colors
                    ret.theme = options.themes[flag];
                } else if (app.flags.text.match(flag)) {
                    ret.text = app.flags.text.output(flag);
                } else if (app.flags.font.match(flag)) {
                    ret.font = app.flags.font.output(flag);
                } else if (app.flags.auto.match(flag)) {
                    ret.auto = true;
                }
            }

            return render ? ret : false;

        };



        if (!canvas.getContext) {
            fallback = true;
        } else {
            if (canvas.toDataURL("image/png")
                    .indexOf("data:image/png") < 0) {
                //Android doesn't support data URI
                fallback = true;
            } else {
                var ctx = canvas.getContext("2d");
            }
        }

        var dpr = 1, bsr = 1;

        if(!fallback){
            dpr = window.devicePixelRatio || 1,
                bsr = ctx.webkitBackingStorePixelRatio || ctx.mozBackingStorePixelRatio || ctx.msBackingStorePixelRatio || ctx.oBackingStorePixelRatio || ctx.backingStorePixelRatio || 1;
        }

        var ratio = dpr / bsr;

        var fluid_images = [];

        var settings = {
            domain: "holder.js",
            images: "img",
            bgnodes: ".holderjs",
            themes: {
                "gray": {
                    background: "#eee",
                    foreground: "#aaa",
                    size: 12
                },
                "social": {
                    background: "#3a5a97",
                    foreground: "#fff",
                    size: 12
                },
                "industrial": {
                    background: "#434A52",
                    foreground: "#C2F200",
                    size: 12
                }
            },
            stylesheet: ".holderjs-fluid {font-size:16px;font-weight:bold;text-align:center;font-family:sans-serif;margin:0}"
        };


        app.flags = {
            dimensions: {
                regex: /^(\d+)x(\d+)$/,
                output: function (val) {
                    var exec = this.regex.exec(val);
                    return {
                        width: +exec[1],
                        height: +exec[2]
                    }
                }
            },
            fluid: {
                regex: /^([0-9%]+)x([0-9%]+)$/,
                output: function (val) {
                    var exec = this.regex.exec(val);
                    return {
                        width: exec[1],
                        height: exec[2]
                    }
                }
            },
            colors: {
                regex: /#([0-9a-f]{3,})\:#([0-9a-f]{3,})/i,
                output: function (val) {
                    var exec = this.regex.exec(val);
                    return {
                        size: settings.themes.gray.size,
                        foreground: "#" + exec[2],
                        background: "#" + exec[1]
                    }
                }
            },
            text: {
                regex: /text\:(.*)/,
                output: function (val) {
                    return this.regex.exec(val)[1];
                }
            },
            font: {
                regex: /font\:(.*)/,
                output: function (val) {
                    return this.regex.exec(val)[1];
                }
            },
            auto: {
                regex: /^auto$/
            }
        }

        for (var flag in app.flags) {
            if (!app.flags.hasOwnProperty(flag)) continue;
            app.flags[flag].match = function (val) {
                return val.match(this.regex)
            }
        }

        app.add_theme = function (name, theme) {
            name != null && theme != null && (settings.themes[name] = theme);
            return app;
        };

        app.add_image = function (src, el) {
            var node = selector(el);
            if (node.length) {
                for (var i = 0, l = node.length; i < l; i++) {
                    var img = document.createElement("img")
                    img.setAttribute("data-src", src);
                    node[i].appendChild(img);
                }
            }
            return app;
        };

        app.run = function (o) {
            var options = extend(settings, o),
                images = [], imageNodes = [], bgnodes = [];

            if(typeof(options.images) == "string"){
                imageNodes = selector(options.images);
            }
            else if (window.NodeList && options.images instanceof window.NodeList) {
                imageNodes = options.images;
            } else if (window.Node && options.images instanceof window.Node) {
                imageNodes = [options.images];
            }

            if(typeof(options.bgnodes) == "string"){
                bgnodes = selector(options.bgnodes);
            } else if (window.NodeList && options.elements instanceof window.NodeList) {
                bgnodes = options.bgnodes;
            } else if (window.Node && options.bgnodes instanceof window.Node) {
                bgnodes = [options.bgnodes];
            }

            preempted = true;

            for (i = 0, l = imageNodes.length; i < l; i++) images.push(imageNodes[i]);

            var holdercss = document.getElementById("holderjs-style");
            if (!holdercss) {
                holdercss = document.createElement("style");
                holdercss.setAttribute("id", "holderjs-style");
                holdercss.type = "text/css";
                document.getElementsByTagName("head")[0].appendChild(holdercss);
            }

            if (!options.nocss) {
                if (holdercss.styleSheet) {
                    holdercss.styleSheet.cssText += options.stylesheet;
                } else {
                    holdercss.appendChild(document.createTextNode(options.stylesheet));
                }
            }



            var cssregex = new RegExp(options.domain + "\/(.*?)\"?\\)");

            for (var l = bgnodes.length, i = 0; i < l; i++) {
                var src = window.getComputedStyle(bgnodes[i], null)
                    .getPropertyValue("background-image");
                var flags = src.match(cssregex);
                var bgsrc = bgnodes[i].getAttribute("data-background-src");

                if (flags) {
                    var holder = parse_flags(flags[1].split("/"), options);
                    if (holder) {
                        render("background", bgnodes[i], holder, src);
                    }
                }
                else if(bgsrc != null){
                    var holder = parse_flags(bgsrc.substr(bgsrc.lastIndexOf(options.domain) + options.domain.length + 1)
                        .split("/"), options);
                    if(holder){
                        render("background", bgnodes[i], holder, src);
                    }
                }
            }

            for (l = images.length, i = 0; i < l; i++) {

                var attr_src = attr_data_src = src = null;

                try{
                    attr_src = images[i].getAttribute("src");
                    attr_datasrc = images[i].getAttribute("data-src");
                }catch(e){}

                if (attr_datasrc == null && !! attr_src && attr_src.indexOf(options.domain) >= 0) {
                    src = attr_src;
                } else if ( !! attr_datasrc && attr_datasrc.indexOf(options.domain) >= 0) {
                    src = attr_datasrc;
                }

                if (src) {
                    var holder = parse_flags(src.substr(src.lastIndexOf(options.domain) + options.domain.length + 1)
                        .split("/"), options);
                    if (holder) {
                        if (holder.fluid) {
                            fluid(images[i], holder, src);
                        } else {
                            render("image", images[i], holder, src);
                        }
                    }
                }
            }
            return app;
        };

        contentLoaded(win, function () {
            if (window.addEventListener) {
                window.addEventListener("resize", fluid_update, false);
                window.addEventListener("orientationchange", fluid_update, false);
            } else {
                window.attachEvent("onresize", fluid_update)
            }
            preempted || app.run();
        });

        if (typeof define === "function" && define.amd) {
            define("Holder", [], function () {
                return app;
            });
        }

    })(Holder, window);

}

/* easy pie init */
function easyPieInit() {
    // generate easy-pie-charts
    if ($('.easy-pie').length && $.fn.easyPieChart)
    {
        $.each($('.easy-pie'), function(k,v)
        {
            var color = primaryColor;
            if ($(this).is('.info')) color = infoColor;
            if ($(this).is('.danger')) color = dangerColor;
            if ($(this).is('.success')) color = successColor;
            if ($(this).is('.warning')) color = warningColor;
            if ($(this).is('.inverse')) color = inverseColor;


            $(v).easyPieChart({
                barColor: color,
                animate: ($('html').is('.ie') ? false : 3000),
                lineWidth: 4,
                size: 50
            });
        });
    }
}

/* Widget Scrollable */
function widgetScrollableInit() {
    /* Slim Scroll Widgets */
    $('.widget-scroll').each(function(){
        $(this).find('.widget-body > div').height($(this).attr('data-scroll-height')).niceScroll({
            cursorwidth: 3,
            zindex: 2,
            cursorborder: "none",
            cursorborderradius: "0",
            cursorcolor: primaryColor

        });
    });

    /* Other non-widget Slim Scroll areas */
    $('*:not(#menu) .slim-scroll').each(function(){
        $(this).height($(this).attr('data-scroll-height')).niceScroll({
            cursorwidth: 3,
            zindex: 2,
            cursorborder: "none",
            cursorborderradius: "0",
            cursorcolor: primaryColor
        });
    });

}

/* Bootstrap Datepicker */
function bootstrapDatepickerInit() {
    $.fn.bdatepicker = $.fn.datepicker;
    
    /* DatePicker */
    // default
    $("#datepicker1").bdatepicker({
        format: 'yyyy-mm-dd',
        startDate: "2013-02-14"
    });

    // component
    $('#datepicker2').bdatepicker({
        format: "dd MM yyyy",
        startDate: "2013-02-14"
    });

    // today button
    $('#datepicker3').bdatepicker({
        format: "dd MM yyyy",
        startDate: "2013-02-14",
        todayBtn: true
    });

    // advanced
    $('#datetimepicker4').bdatepicker({
        format: "dd MM yyyy - hh:ii",
        autoclose: true,
        todayBtn: true,
        startDate: "2013-02-14 10:00",
        minuteStep: 10
    });

    // meridian
    $('#datetimepicker5').bdatepicker({
        format: "dd MM yyyy - HH:ii P",
        showMeridian: true,
        autoclose: true,
        startDate: "2013-02-14 10:00",
        todayBtn: true
    });

    // other
    if ($('#datepicker').length) $("#datepicker").bdatepicker({ showOtherMonths:true });
    if ($('#datepicker-inline').length) $('#datepicker-inline').bdatepicker({ inline: true, showOtherMonths:true });
    if ($('.datepicker-block').length) $('.datepicker-block').bdatepicker({ inline: true, showOtherMonths:true });
}

/* bootstrap-timepicker */
function bootstrapTimePickerInit() {
    //$.fn.btimepicker = $.fn.timepicker;
    $('#timepicker1').timepicker();
    $('#timepicker2').timepicker({
        minuteStep: 1,
        template: 'modal',
        showSeconds: true,
        showMeridian: false,
        modalBackdrop: true
    });
    $('#timepicker3').timepicker({
        minuteStep: 5,
        showInputs: false,
        disableFocus: true
    });
    $('#timepicker4').timepicker({
        minuteStep: 1,
        secondStep: 5,
        showInputs: false,
        showSeconds: true,
        showMeridian: false
    });
    $('#timepicker5').timepicker({
        template: false,
        showInputs: false,
        minuteStep: 5
    });
}

/* google map init */
var igms = false;
function initScripts() {
    if (igms) return;
    componentsPath = "";
    var $scripts = [
        componentsPath + "/MelisCore/assets/components/modules/admin/maps/google/assets/lib/jquery-ui-map/ui/jquery.ui.map.js",
        componentsPath + "/MelisCore/assets/components/modules/admin/maps/google/assets/lib/jquery-ui-map/ui/jquery.ui.map.extensions.js",
        componentsPath + "/MelisCore/assets/components/modules/admin/maps/google/assets/lib/jquery-ui-map/ui/jquery.ui.map.services.js",
        componentsPath + "/MelisCore/assets/components/modules/admin/maps/google/assets/lib/jquery-ui-map/ui/jquery.ui.map.microformat.js",
        componentsPath + "/MelisCore/assets/components/modules/admin/maps/google/assets/lib/jquery-ui-map/addons/markerclustererplus/markerclusterer.min.js"
    ];
    $.each($scripts, function(k,v){
        if ($('[src="'+v+'"]').length) return true;
        var scriptNode = document.createElement('script');

        scriptNode.src = v;
        $('head').prepend($(scriptNode));
    });

    $.extend($.ui.gmap.prototype, {
        pagination: function(prop) {
            var $el = $("<div id='pagination' class='btn-group btn-group-lg' style='width: 100%'>"
                + "<a href='#' class='col-md-2 back-btn btn btn-inverse'>&lsaquo;</a>"
                + "<a class='col-md-8 display btn btn-inverse'></a>"
                + "<a href='#' class='col-md-2 fwd-btn btn btn-inverse'>&rsaquo;</a>"
                + "</div>");

            var self = this, i = 0, prop = prop || 'title';
            self.set('pagination', function(a, b) {
                if (a) {
                    i = i + b;
                    $el.find('.display').text(self.get('markers')[i][prop]);
                    self.get('map').panTo(self.get('markers')[i].getPosition());
                }
            });
            self.get('pagination')(true, 0);
            $el.find('.back-btn').click(function(e) {
                e.preventDefault();
                self.get('pagination')((i > 0), -1, this);
            });
            $el.find('.fwd-btn').click(function(e) {
                e.preventDefault();
                self.get('pagination')((i < self.get('markers').length - 1), 1, this);
            });
            self.addControl($el, google.maps.ControlPosition.TOP_LEFT);
        }
    });
    igms = true;
}

function checkAPIMaps() {
    if (typeof google === 'object' && typeof google.maps === 'object') {
        initGoogleMaps();
    }

    if( $('#google-map-clustering').length || $('#google-map-extend-pagination').length || $('#google-map-filters').length || $('#google-map-geocoding').length || $('#google-map-json').length || $('#google-map-streetview').length || $('#google-fs').length || $('#google-fs-realestate').length ) {
        var script = document.createElement("script");
        script.type = "text/javascript";
        script.async = "async";
        script.async = "defeer";
        // script.src = "http://maps.google.com/maps/api/js?sensor=false&callback=handleApiReady";
        script.src = "https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBrxUTzqWroARkIZ24zYukk7E43b9F38E4&callback=initGoogleMaps"
        if (!$('script[src="https://maps.googleapis.com/maps/api/js?v=3.exp&key=AIzaSyBrxUTzqWroARkIZ24zYukk7E43b9F38E4&callback=initGoogleMaps"]').length > 0) {
            //script exists
            document.body.appendChild(script);
        }
    }
}

function initGoogleMaps() {
    initScripts();

    /*
     * Clustering
     */
    if ($('#google-map-clustering').length)
    {
        // We need to bind the map with the "init" event otherwise bounds will be null
        $('#google-map-clustering').gmap({'zoom': 2, 'disableDefaultUI':true}).bind('init', function(evt, map) {
            var bounds = map.getBounds();
            var southWest = bounds.getSouthWest();
            var northEast = bounds.getNorthEast();
            var lngSpan = northEast.lng() - southWest.lng();
            var latSpan = northEast.lat() - southWest.lat();
            for ( var i = 0; i < 1000; i++ ) {
                var lat = southWest.lat() + latSpan * Math.random();
                var lng = southWest.lng() + lngSpan * Math.random();
                $('#google-map-clustering').gmap('addMarker', {
                    'position': new google.maps.LatLng(lat, lng)
                }).click(function() {
                    $('#google-map-clustering').gmap('openInfoWindow', { content : 'Hello world!' }, this);
                });
            }
            // mcOptions = {imagePath: "https://google-maps-utility-library-v3.googlecode.com/svn/trunk/markerclustererplus/images/m"};
            mcOptions = {imagePath: "https://raw.githubusercontent.com/googlemaps/v3-utility-library/master/markerclustererplus/images/m"};

            $('#google-map-clustering').gmap('set', 'MarkerClusterer', new MarkerClusterer(map, $(this).gmap('get', 'markers'), mcOptions));
            // $('#google-map-clustering').gmap('set', 'MarkerClusterer', new MarkerClusterer(map, mcOptions));

            // To call methods in MarkerClusterer simply call
            // $('#google-map-clustering').gmap('get', 'MarkerClusterer').callingSomeMethod();
        });
    }

    /*
     * Extend with pagination
     */
    if ($('#google-map-extend-pagination').length)
    {
        var markers = [
            {'position': '59.32893000000001,18.064910000000054', 'title': 'Stockholm, Sweden' },
            {'position': '35.6894875,139.69170639999993', 'title': 'Tokyo, Japan' },
            {'position': '13.7234186, 100.47623190000002', 'title': 'Bangkok, Thailand' },
            {'position': '51.508129,-0.12800500000003012', 'title': 'London, Great Britain' },
            {'position': '40.7143528,-74.0059731', 'title': 'New York, USA' },
            {'position': '48.856614,2.3522219000000177', 'title': 'Paris, France' },
            {'position': '34.0522342,-118.2436849', 'title': 'Los Angeles, USA' },
            {'position': '55.75,37.616666699999996', 'title': 'Moskva, Ryssia' }
        ];

        $('#google-map-extend-pagination').gmap({'zoom': 5, 'disableDefaultUI':true, 'callback': function() {
            var self = this;
            $.each(markers, function(i, marker) {
                self.addMarker(marker).click(function() {
                    self.openInfoWindow({'content': this.title}, this);
                });
            });
        }}).gmap('pagination', 'title');
    }

    /*
     * Filtering
     */
    if ($('#google-map-filters').length)
    {
        // format
        String.prototype.format = function() { a = this; for ( k in arguments ) { a = a.replace("{" + k + "}", arguments[k]); } return a; };

        $('#google-map-filters').gmap({'disableDefaultUI':true}).bind('init', function(evt, map) {
            //$('#google-map-filters').gmap('addControl', 'tags-control', google.maps.ControlPosition.TOP_LEFT);
            $('#google-map-filters').gmap('addControl', 'radios', google.maps.ControlPosition.TOP_LEFT);
            var southWest = map.getBounds().getSouthWest();
            var northEast = map.getBounds().getNorthEast();
            var lngSpan = northEast.lng() - southWest.lng();
            var latSpan = northEast.lat() - southWest.lat();
            // var images = ['http://google-maps-icons.googlecode.com/files/friends.png', 'http://google-maps-icons.googlecode.com/files/home.png', 'http://google-maps-icons.googlecode.com/files/girlfriend.png', 'http://google-maps-icons.googlecode.com/files/dates.png', 'http://google-maps-icons.googlecode.com/files/realestate.png', 'http://google-maps-icons.googlecode.com/files/apartment.png', 'http://google-maps-icons.googlecode.com/files/family.png'];
            var images = [];
            var tags = ['jQuery', 'Google maps', 'Plugin', 'SEO', 'Java', 'PHP', 'C#', 'Ruby', 'JavaScript', 'HTML'];
            //$('#tags').append('<option value="all">All</option>');
            $.each(tags, function(i, tag) {
                //$('#tags').append(('<option value="{0}">{1}</option>').format(tag, tag));
                $('#radios').append(('<label style="margin-right:5px;display:block;"><input type="checkbox" style="margin-right:3px" value="{0}"/>{1}</label>').format(tag, tag));
            });
            for ( i = 0; i < 100; i++ ) {
                var temp = [];
                for ( j = 0; j < Math.random()*5; j++ ) {
                    temp.push(tags[Math.floor(Math.random()*10)]);
                }
                $('#google-map-filters').gmap('addMarker', { 'icon': images[(Math.floor(Math.random()*7))], 'tags':temp, 'bound':true, 'position': new google.maps.LatLng(southWest.lat() + latSpan * Math.random(), southWest.lng() + lngSpan * Math.random()) } ).click(function() {
                    var visibleInViewport = ( $('#google-map-filters').gmap('inViewport', $(this)[0]) ) ? 'I\'m visible in the viewport.' : 'I\'m sad and hidden.';
                    $('#google-map-filters').gmap('openInfoWindow', { 'content': $(this)[0].tags + '<br/>' +visibleInViewport }, this);
                });
            }
            $('input:checkbox').click(function() {
                $('#google-map-filters').gmap('closeInfoWindow');
                $('#google-map-filters').gmap('set', 'bounds', null);
                var filters = [];
                $('input:checkbox:checked').each(function(i, checkbox) {
                    filters.push($(checkbox).val());
                });
                if ( filters.length > 0 ) {
                    $('#google-map-filters').gmap('find', 'markers', { 'property': 'tags', 'value': filters, 'operator': 'OR' }, function(marker, found) {
                        if (found) {
                            $('#google-map-filters').gmap('addBounds', marker.position);
                        }
                        marker.setVisible(found);
                    });
                } else {
                    $.each($('#google-map-filters').gmap('get', 'markers'), function(i, marker) {
                        $('#google-map-filters').gmap('addBounds', marker.position);
                        marker.setVisible(true);
                    });
                }
            });

            /*$("#tags").change(function() {
             $('#google-map-filters').gmap('closeInfoWindow');
             $('#google-map-filters').gmap('set', 'bounds', null);
             if ( $(this).val() == 'all' ) {
             $.each($('#google-map-filters').gmap('get', 'markers'), function(i, marker) {
             marker.setVisible(true);
             });
             } else {
             $('#google-map-filters').gmap('find', 'markers', { 'property': 'tags', 'value': $(this).val() }, function(marker, found) {
             if (found) {
             $('#google-map-filters').gmap('addBounds', marker.position);
             }
             marker.setVisible(found);
             });
             }
             });*/
        });
    }

    /*
     * Geocoding
     */
    if ($('#google-map-geocoding').length)
    {
        $('#google-map-geocoding').gmap({
            'zoomControl' : true,
            'zoomControlOpt': {
                'style' : 'SMALL',
                'position' : 'TOP_LEFT'
            },
            'panControl' : false,
            'streetViewControl' : false,
            'mapTypeControl': false,
            'overviewMapControl': false,
            'scrollwheel': false,
            'mapTypeId': google.maps.MapTypeId.ROADMAP
        }).bind('init', function(event, map)
        {
            var gmgLatLng = new google.maps.LatLng(53.29463136870075, -6.15019965916872);
            $('#google-map-geocoding').gmap('addMarker', {
                'position': gmgLatLng,
                'draggable': true,
                'bounds': false
            }, function(map, marker) {
                $('#modals').append('<div id="dialog'+marker.__gm_id+'" class="hide">' +
                    '<label for="country">Country</label>'+
                    '<input id="country'+marker.__gm_id+'" type="text" class="form-control" name="country" value=""/>' +
                    '<div class="separator bottom"></div><label for="state">State</label>' +
                    '<input id="state'+marker.__gm_id+'" type="text" class="form-control" name="state" value=""/>' +
                    '<div class="separator bottom"></div><label for="address">Address</label>' +
                    '<input id="address'+marker.__gm_id+'" type="text" class="form-control" name="address" value=""/>' +
                    '<div class="separator bottom"></div><label for="comment">Comment</label>' +
                    '<textarea id="comment" name="comment" class="form-control" rows="5"></textarea>' +
                    '</div>');
            }).dragend( function(event) {
                findLocation(event.latLng, this);
            }).click( function(event) {
                findLocation(event.latLng, this);
            });

            $('#google-map-geocoding').gmap('option', 'center', gmgLatLng );
            $('#google-map-geocoding').gmap('option', 'zoom', 16 );

            $(map).click( function(event)
            {
                $('#google-map-geocoding').gmap('addMarker', {
                    'position': event.latLng,
                    'draggable': true,
                    'bounds': false
                }, function(map, marker) {
                    $('#modals').append('<div id="dialog'+marker.__gm_id+'" class="hide">' +
                        '<label for="country">Country</label>'+
                        '<input id="country'+marker.__gm_id+'" type="text" class="form-control" name="country" value=""/>' +
                        '<div class="separator bottom"></div><label for="state">State</label>' +
                        '<input id="state'+marker.__gm_id+'" type="text" class="form-control" name="state" value=""/>' +
                        '<div class="separator bottom"></div><label for="address">Address</label>' +
                        '<input id="address'+marker.__gm_id+'" type="text" class="form-control" name="address" value=""/>' +
                        '<div class="separator bottom"></div><label for="comment">Comment</label>' +
                        '<textarea id="comment" name="comment" class="form-control" rows="5"></textarea>' +
                        '</div>');
                    findLocation(marker.getPosition(), marker);
                }).dragend( function(event) {
                    findLocation(event.latLng, this);
                }).click( function() {
                    openDialog(this);
                });
            });
        });

        function findLocation(location, marker) {
            $('#google-map-geocoding').gmap('search', {'location': location}, function(results, status) {
                if ( status === 'OK' ) {
                    $.each(results[0].address_components, function(i,v) {
                        if ( v.types[0] == "administrative_area_level_1" ||
                            v.types[0] == "administrative_area_level_2" ) {
                            $('#dialog'+marker.__gm_id + ' [name="state"]').attr('value', v.long_name);
                        } else if ( v.types[0] == "country") {
                            $('#dialog'+marker.__gm_id + ' [name="country"]').attr('value', v.long_name);
                        }
                    });
                    marker.setTitle(results[0].formatted_address);
                    $('#dialog'+marker.__gm_id + ' [name="address"]').attr('value', results[0].formatted_address);
                    openDialog(marker);
                }
            });
        }

        function openDialog(marker) {
            bootbox.dialog({
                message: $('#dialog'+marker.__gm_id).html(),
                title: "Edit location",
                buttons: {
                    success: {
                        'label': 'Save',
                        'className': 'btn-success',
                        'callback': function(){}
                    },
                    danger: {
                        'label': 'Remove',
                        'className': 'btn-danger',
                        'callback': function(){
                            marker.setMap(null);
                        }
                    }
                }
            });
        }
    }

    /*
     * JSON
     */
    if ($('#google-map-json').length)
    {
        $('#google-map-json').gmap({
            'zoomControl' : true,
            'zoomControlOpt': {
                'style' : 'SMALL',
                'position' : 'TOP_LEFT'
            },
            'panControl' : false,
            'streetViewControl' : false,
            'mapTypeControl': false,
            'overviewMapControl': false,
            'scrollwheel': false,
            'mapTypeId': google.maps.MapTypeId.ROADMAP
        }).bind('init', function() {
            $.getJSON( componentsPath + '/MelisCore/assets/components/modules/admin/maps/google/assets/lib/jquery-ui-map/data/demo.json', function(data) {
                $.each( data.markers, function(i, marker) {
                    $('#google-map-json').gmap('addMarker', {
                        'position': new google.maps.LatLng(marker.latitude, marker.longitude)
                    }).click(function() {
                        $('#google-map-json').gmap('openInfoWindow', { 'content': marker.content }, this);
                    });
                });
                $('#google-map-json').gmap('option', 'center', new google.maps.LatLng(data.markers[1].latitude, data.markers[1].longitude) );
                $('#google-map-json').gmap('option', 'zoom', 16 );
            });
        });
    }

    /*
     * Streetview
     */
    if ($('#google-map-streetview').length)
    {
        $('#google-map-streetview').gmap({ 'disableDefaultUI':true, 'callback': function() {
            var self = this;
            self.microformat('.vevent', function(result, item, index) {
                var clone = $(item).clone().addClass('ui-dialog-vevent').append('<div id="streetview{0}" class="streetview"></div>'.replace('{0}', index));
                clone.find('p').remove();
                var latlng = new google.maps.LatLng(result.location[0].geo[0].latitude['value-title'], result.location[0].geo[0].longitude['value-title']);
                // self.addMarker( { 'bounds':true, 'position': latlng, 'title': result.summary, 'icon': 'http://google-maps-icons.googlecode.com/files/music-rock.png' }, function(map, marker) {
                self.addMarker( { 'bounds':true, 'position': latlng, 'title': result.summary }, function(map, marker) {
                    $(item).find('.summary').click( function() {
                        $(marker).triggerEvent('click');
                        return false;
                    });
                    $(item).mouseover(function() {
                        self.get('map').panTo(marker.getPosition());
                    });
                }).click(function() {
                    self.get('map').panTo( $(this)[0].getPosition());
                    //$(clone).dialog({ 'modal': true, 'width': 530, 'title': result.summary, 'resizable': false, 'draggable': false });
                    bootbox.alert($(clone).html());
                    self.displayStreetView('streetview{0}'.replace('{0}', index), { 'position': $(this)[0].getPosition() });
                });
            });
        }});
    }

    /*
     * Fullscreen
     */

    if ($('#google-fs').length)
    {
        $('#google-fs').height($(window).height() - $('#footer').height() - $('.navbar.main').height() - $('#menu-top').height());

        $('#google-fs').gmap({
            'zoomControl' : true,
            'zoomControlOpt': {
                'style' : 'SMALL',
                'position' : 'TOP_LEFT'
            },
            'panControl' : false,
            'streetViewControl' : false,
            'mapTypeControl': false,
            'overviewMapControl': false,
            'scrollwheel': false,
            'mapTypeId': google.maps.MapTypeId.ROADMAP
        })
            .bind('init', function()
            {
                $.getJSON( componentsPath + '/MelisCore/assets/components/modules/admin/maps/google/assets/lib/jquery-ui-map/data/demo.json', function(data)
                {
                    $.each( data.markers, function(i, marker)
                    {
                        $('#google-fs').gmap('addMarker',
                            {
                                'position': new google.maps.LatLng(marker.latitude, marker.longitude),
                                'bounds': true,
                                'animation': google.maps.Animation.DROP
                            })
                            .click(function()
                            {
                                $('#google-fs').gmap('openInfoWindow', { 'content': marker.content }, this);
                            });
                    });

                    $('#google-fs').gmap('option', 'center', new google.maps.LatLng(data.markers[1].latitude, data.markers[1].longitude) );
                    $('#google-fs').gmap('option', 'zoom', 16 );

                    setTimeout(function(){
                        $('#google-fs').gmap('openInfoWindow', { 'content': data.markers[1].content }, $('#google-fs').gmap('get', 'markers')[1]);
                    }, 1000);
                });
            });
    }

    /*
     * Real Estate
     */

    var mfsr = $('#google-fs-realestate');
    if (mfsr.length)
    {
        var mfsr_height =   $(window).height() -
                $('#footer').height() -
                $('.navbar.main').height() -
                $('#menu-top').height(),

            mfsr_module = mfsr.data('module') || 'admin',
            mfsr_url = rootPath + mfsr_module + '/ajax/maps_google_realestate.json',
            mfsr_info_width = 'auto';

        switch (mfsr_module) {
            default:
            case 'admin':
                mfsr_info_width = 240;
                break;
            case 'realestate':
                mfsr_info_width = 330;
                break;
        }

        function msfr_info ( marker )
        {
            var content = $('<div/>');
            content.addClass('innerAll inner-2x').html('<div></div>');

            if (mfsr_module == 'admin')
                content.prepend('<h4></h4>').find(':header').text(marker.title);

            content.find('> div').addClass('msfr_info_content').html(marker.content);

            return content.html();
        }

        if (mfsr_module == 'admin')
            mfsr.height(mfsr_height);

        mfsr.gmap({
            'zoomControl' : true,
            'zoomControlOptions': {
                'style' : google.maps.ZoomControlStyle.SMALL,
                'position' : google.maps.ControlPosition.TOP_RIGHT
            },
            'panControl' : false,
            'streetViewControl' : false,
            'mapTypeControl': false,
            'overviewMapControl': false,
            'scrollwheel': false,
            'mapTypeId': google.maps.MapTypeId.ROADMAP,
            'zoom': 16
        })
            .bind('init', function()
            {
                $.getJSON( mfsr_url, function(data)
                {
                    $.each( data.markers, function(i, marker)
                    {
                        setTimeout(function()
                            {
                                mfsr.gmap('addMarker',
                                    {
                                        'position': new google.maps.LatLng(marker.latitude, marker.longitude),
                                        'draggable': true,
                                        'animation': google.maps.Animation.DROP
                                    })
                                    .click(function()
                                    {
                                        mfsr.gmap('openInfoWindow', { 'content': msfr_info(marker), 'maxWidth': mfsr_info_width }, this);
                                    });

                                if (i == 1)
                                {
                                    mfsr.gmap('openInfoWindow', { 'content': msfr_info(marker), 'maxWidth': mfsr_info_width }, mfsr.gmap('get', 'markers')[i]);
                                    mfsr.gmap('option', 'center', new google.maps.LatLng(marker.latitude, marker.longitude) );
                                }
                            },
                            300*i);
                    });
                });
            });
    }

}

/* google maps vector init */
function mapsVectorInit() {
    $(function()
    {

        $('#maps_vector_tabs a[data-toggle="tab"]').on('shown.bs.tab', function (e)
        {
            if ($(this).attr('data-init'))
                return;

            $(this).attr('data-init', 1);
            switch ($(this).attr('href'))
            {
                case '#tab1':
                    initWorldMapGDP();
                    break;

                case '#tab2':
                    initWorldMapMarkers();
                    break;

                case '#tab3':
                    initUSAUnemployment();
                    break;

                case '#tab4':
                    initRegionSelection();
                    break;

                case '#tab5':
                    initFranceElections();
                    break;

                case '#tab6':
                    initRandomColors();
                    break;

                case '#tab7':
                    initMallMap();
                    break;

                case '#tab8':
                    initProjectionMap();
                    break;
            }
        });

        // load this map by default
        initWorldMapGDP();

        // GDP by country
        function initWorldMapGDP()
        {
            $('#world-map-gdp').vectorMap({
                map: 'world_mill_en',
                series: {
                    regions: [{
                        values: gdpData,
                        scale: ['#C8EEFF', '#0071A4'],
                        normalizeFunction: 'polynomial'
                    }]
                },
                onLabelShow: function(e, el, code){
                    el.html(el.html()+' (GDP - '+gdpData[code]+')');
                }
            });
        }

        // World map markers
        function initWorldMapMarkers()
        {
            $('#world-map-markers').vectorMap({
                map: 'world_mill_en',
                scaleColors: ['#C8EEFF', '#0071A4'],
                normalizeFunction: 'polynomial',
                hoverOpacity: 0.7,
                hoverColor: false,
                markerStyle: {
                    initial: {
                        fill: primaryColor,
                        stroke: '#383f47'
                    }
                },
                backgroundColor: '#383f47',
                markers: [
                    {latLng: [41.90, 12.45], name: 'Vatican City'},
                    {latLng: [43.73, 7.41], name: 'Monaco'},
                    {latLng: [-0.52, 166.93], name: 'Nauru'},
                    {latLng: [-8.51, 179.21], name: 'Tuvalu'},
                    {latLng: [43.93, 12.46], name: 'San Marino'},
                    {latLng: [47.14, 9.52], name: 'Liechtenstein'},
                    {latLng: [7.11, 171.06], name: 'Marshall Islands'},
                    {latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis'},
                    {latLng: [3.2, 73.22], name: 'Maldives'},
                    {latLng: [35.88, 14.5], name: 'Malta'},
                    {latLng: [12.05, -61.75], name: 'Grenada'},
                    {latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines'},
                    {latLng: [13.16, -59.55], name: 'Barbados'},
                    {latLng: [17.11, -61.85], name: 'Antigua and Barbuda'},
                    {latLng: [-4.61, 55.45], name: 'Seychelles'},
                    {latLng: [7.35, 134.46], name: 'Palau'},
                    {latLng: [42.5, 1.51], name: 'Andorra'},
                    {latLng: [14.01, -60.98], name: 'Saint Lucia'},
                    {latLng: [6.91, 158.18], name: 'Federated States of Micronesia'},
                    {latLng: [1.3, 103.8], name: 'Singapore'},
                    {latLng: [1.46, 173.03], name: 'Kiribati'},
                    {latLng: [-21.13, -175.2], name: 'Tonga'},
                    {latLng: [15.3, -61.38], name: 'Dominica'},
                    {latLng: [-20.2, 57.5], name: 'Mauritius'},
                    {latLng: [26.02, 50.55], name: 'Bahrain'},
                    {latLng: [0.33, 6.73], name: 'S�o Tom� and Pr�ncipe'}
                ]
            });
        }
        componentsPath = '';
        // USA unemployment
        function initUSAUnemployment()
        {
            $.getJSON( componentsPath + 'MelisCore/assets/components/modules/admin/maps/vector/assets/lib/data/us-unemployment.json', function(data){
                // $.getJSON('/MelisDesign/ajax/us-unemployment.json', function(data){
                var val = 2009;
                statesValues = jvm.values.apply({}, jvm.values(data.states)),
                    metroPopValues = Array.prototype.concat.apply([], jvm.values(data.metro.population)),
                    metroUnemplValues = Array.prototype.concat.apply([], jvm.values(data.metro.unemployment));

                $('#usa-unemployment').vectorMap({
                    map: 'us_aea_en',
                    markers: data.metro.coords,
                    series: {
                        markers: [{
                            attribute: 'fill',
                            scale: ['#FEE5D9', '#A50F15'],
                            values: data.metro.unemployment[val],
                            min: jvm.min(metroUnemplValues),
                            max: jvm.max(metroUnemplValues)
                        },{
                            attribute: 'r',
                            scale: [5, 20],
                            values: data.metro.population[val],
                            min: jvm.min(metroPopValues),
                            max: jvm.max(metroPopValues)
                        }],
                        regions: [{
                            scale: ['#DEEBF7', '#08519C'],
                            attribute: 'fill',
                            values: data.states[val],
                            min: jvm.min(statesValues),
                            max: jvm.max(statesValues)
                        }]
                    },
                    onMarkerLabelShow: function(event, label, index){
                        label.html(
                            '<b>'+data.metro.names[index]+'</b><br/>'+
                            '<b>Population: </b>'+data.metro.population[val][index]+'</br>'+
                            '<b>Unemployment rate: </b>'+data.metro.unemployment[val][index]+'%'
                        );
                    },
                    onRegionLabelShow: function(event, label, code){
                        label.html(
                            '<b>'+label.html()+'</b></br>'+
                            '<b>Unemployment rate: </b>'+data.states[val][code]+'%'
                        );
                    }
                });

                var mapObject = $('#usa-unemployment').vectorMap('get', 'mapObject');
                /*              $("#usa-unemployment-slider").slider({
                 value: val,
                 min: 2005,
                 max: 2009,
                 step: 1,
                 create: JQSliderCreate,
                 slide: function( event, ui ) {
                 $('#usa-unemployment-slider-year strong').html(ui.value);
                 val = ui.value;
                 mapObject.series.regions[0].setValues(data.states[ui.value]);
                 mapObject.series.markers[0].setValues(data.metro.unemployment[ui.value]);
                 mapObject.series.markers[1].setValues(data.metro.population[ui.value]);
                 }
                 });*/
            });
        }

        // regions selection
        function initRegionSelection()
        {
            map = new jvm.WorldMap({
                container: $('#regions-selection'),
                map: 'de_merc_en',
                regionsSelectable: true,
                markersSelectable: true,
                markers: [
                    {latLng: [52.50, 13.39], name: 'Berlin'},
                    {latLng: [53.56, 10.00], name: 'Hamburg'},
                    {latLng: [48.13, 11.56], name: 'Munich'},
                    {latLng: [50.95, 6.96], name: 'Cologne'},
                    {latLng: [50.11, 8.68], name: 'Frankfurt am Main'},
                    {latLng: [48.77, 9.17], name: 'Stuttgart'},
                    {latLng: [51.23, 6.78], name: 'Dusseldorf'},
                    {latLng: [51.51, 7.46], name: 'Dortmund'},
                    {latLng: [51.45, 7.01], name: 'Essen'},
                    {latLng: [53.07, 8.80], name: 'Bremen'}
                ],
                markerStyle: {
                    initial: {
                        fill: '#4DAC26'
                    },
                    selected: {
                        fill: '#CA0020'
                    }
                },
                regionStyle: {
                    initial: {
                        fill: '#B8E186'
                    },
                    selected: {
                        fill: '#F4A582'
                    }
                },
                series: {
                    markers: [{
                        attribute: 'r',
                        scale: [5, 15],
                        values: [
                            887.70,
                            755.16,
                            310.69,
                            405.17,
                            248.31,
                            207.35,
                            217.22,
                            280.71,
                            210.32,
                            325.42
                        ]
                    }]
                },
                onRegionSelected: function(){
                    if (window.localStorage) {
                        window.localStorage.setItem(
                            'jvectormap-selected-regions',
                            JSON.stringify(map.getSelectedRegions())
                        );
                    }
                },
                onMarkerSelected: function(){
                    if (window.localStorage) {
                        window.localStorage.setItem(
                            'jvectormap-selected-markers',
                            JSON.stringify(map.getSelectedMarkers())
                        );
                    }
                }
            });
            map.setSelectedRegions( JSON.parse( window.localStorage.getItem('jvectormap-selected-regions') || '[]' ) );
            map.setSelectedMarkers( JSON.parse( window.localStorage.getItem('jvectormap-selected-markers') || '[]' ) );
        }

        // France elections
        function initFranceElections()
        {
            $.getJSON('/MelisDesign/ajax/france-elections.json', function(data){
                new jvm.WorldMap({
                    map: 'fr_merc_en',
                    container: $('#france-2007'),
                    series: {
                        regions: [{
                            scale: {
                                '1': '#4169E1',
                                '2': '#FF69B4'
                            },
                            attribute: 'fill',
                            values: data['year2007'].results
                        }]
                    }
                });

                new jvm.WorldMap({
                    map: 'fr_merc_en',
                    container: $('#france-2012'),
                    series: {
                        regions: [{
                            scale: {
                                '1': '#FF69B4',
                                '2': '#4169E1'
                            },
                            attribute: 'fill',
                            values: data['year2012'].results
                        }]
                    }
                });
            });
        }

        // random colors
        var palette = ['#66C2A5', '#FC8D62', '#8DA0CB', '#E78AC3', '#A6D854'],
            generateColors = function(){
                var colors = {},
                    key;

                for (key in colorsMap.regions) {
                    colors[key] = palette[Math.floor(Math.random()*palette.length)];
                }
                return colors;
            },
            colorsMap;

        function initRandomColors()
        {
            colorsMap = new jvm.WorldMap({
                map: 'es_merc_en',
                container: $('#random-colors-map'),
                series: {
                    regions: [{
                        attribute: 'fill'
                    }]
                }
            });
            colorsMap.series.regions[0].setValues(generateColors());
            $('#update-colors-button').click(function(e){
                e.preventDefault();
                colorsMap.series.regions[0].setValues(generateColors());
            });
        }

        // mall map
        function initMallMap()
        {
            $('#mall-map').vectorMap({
                map: 'mall',
                backgroundColor: 'transparent',
                markers: [{
                    coords: [60, 110],
                    name: 'Escalator 1',
                    style: {fill: 'yellow'}
                },{
                    coords: [260, 95],
                    name: 'Escalator 2',
                    style: {fill: 'yellow'}
                },{
                    coords: [434, 95],
                    name: 'Escalator 3',
                    style: {fill: 'yellow'}
                },{
                    coords: [634, 110],
                    name: 'Escalator 4',
                    style: {fill: 'yellow'}
                }],
                series: {
                    regions: [{
                        values: {
                            F102: 'SPORTS & OUTDOOR',
                            F103: 'HOME DECOR',
                            F105: 'FASHION',
                            F106: 'OTHER',
                            F108: 'BEAUTY & SPA',
                            F109: 'FASHION',
                            F110: 'BEAUTY & SPA',
                            F111: 'URBAN FAVORITES',
                            F114: 'SERVICES',
                            F166: 'DINING',
                            F167: 'FASHION',
                            F169: 'DINING',
                            F170: 'ENTERTAINMENT',
                            F172: 'DINING',
                            F174: 'DINING',
                            F115: 'KIDS STUFF',
                            F117: 'LIFESTYLE',
                            F118: 'URBAN FAVORITES',
                            F119: 'FASHION',
                            F120: 'FASHION',
                            F122: 'KIDS STUFF',
                            F124: 'KIDS STUFF',
                            F125: 'KIDS STUFF',
                            F126: 'KIDS STUFF',
                            F128: 'KIDS STUFF',
                            F129: 'LIFESTYLE',
                            F130: 'HOME DECOR',
                            F132: 'DINING',
                            F133: 'SPORTS & OUTDOOR',
                            F134: 'KIDS STUFF',
                            F135: 'LIFESTYLE',
                            F136: 'LIFESTYLE',
                            F139: 'KIDS STUFF',
                            F153: 'DINING',
                            F155: 'FASHION',
                            F156: 'URBAN FAVORITES',
                            F157: 'URBAN FAVORITES',
                            F158: 'LINGERIE & UNDERWEAR',
                            F159: 'FASHION',
                            F160: 'FASHION',
                            F162: 'FASHION',
                            F164: 'FASHION',
                            F165: 'FASHION',
                            FR01: 'REST ROOMS',
                            FR02: 'REST ROOMS',
                            FR03: 'REST ROOMS',
                            FR04: 'REST ROOMS',
                            FFC: 'DINING'
                        },
                        scale: {
                            "FASHION": "#2761ad",
                            "LINGERIE & UNDERWEAR": "#d58aa3",
                            "BEAUTY & SPA": "#ee549f",
                            "URBAN FAVORITES": "#15bbba",
                            "SPORTS & OUTDOOR": "#8864ab",
                            "KIDS STUFF": "#ef4e36",
                            "ENTERTAINMENT": "#e47325",
                            "HOME DECOR": "#a2614f",
                            "LIFESTYLE": "#8a8934",
                            "DINING": "#73bb43",
                            "REST ROOMS": "#6c260f",
                            "SERVICES": "#504d7c",
                            "OTHER": "#c7b789"
                        }
                    }]
                },
                onRegionLabelShow: function(e, el, code){
                    if (el.html() === '') {
                        e.preventDefault();
                    }
                }
            });
        }

        // reverse projection map
        var mapProjection,
            markerIndex = 0,
            markersCoords = {};

        function initProjectionMap()
        {
            mapProjection = new jvm.WorldMap({
                map: 'us_lcc_en',
                markerStyle: {
                    initial: {
                        fill: 'red'
                    }
                },
                container: $('#projection-map'),
                onMarkerLabelShow: function(e, label, code){
                    mapProjection.label.text(markersCoords[code].lat.toFixed(2)+', '+markersCoords[code].lng.toFixed(2));
                },
                onMarkerClick: function(e, code){
                    mapProjection.removeMarkers([code]);
                    mapProjection.label.hide();
                }
            });

            mapProjection.container.click(function(e){
                var latLng = mapProjection.pointToLatLng(e.offsetX, e.offsetY),
                    targetCls = $(e.target).attr('class');

                if (latLng && (!targetCls || (targetCls && $(e.target).attr('class').indexOf('jvectormap-marker') === -1))) {
                    markersCoords[markerIndex] = latLng;
                    mapProjection.addMarker(markerIndex, {latLng: [latLng.lat, latLng.lng]});
                    markerIndex += 1;
                }
            });
        }

    });
}

/* ColVis.min.js */
function colVis() {
    /*! ColVis 1.1.2
 * ©2010-2015 SpryMedia Ltd - datatables.net/license
 */

/**
 * @summary     ColVis
 * @description Controls for column visibility in DataTables
 * @version     1.1.2
 * @file        dataTables.colReorder.js
 * @author      SpryMedia Ltd (www.sprymedia.co.uk)
 * @contact     www.sprymedia.co.uk/contact
 * @copyright   Copyright 2010-2015 SpryMedia Ltd.
 *
 * This source file is free software, available under the following license:
 *   MIT license - http://datatables.net/license/mit
 *
 * This source file is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE. See the license files for details.
 *
 * For details please refer to: http://www.datatables.net
 */

(function(window, document, undefined) {


    var factory = function( $, DataTable ) {
    "use strict";
    
    /**
     * ColVis provides column visibility control for DataTables
     *
     * @class ColVis
     * @constructor
     * @param {object} DataTables settings object. With DataTables 1.10 this can
     *   also be and API instance, table node, jQuery collection or jQuery selector.
     * @param {object} ColVis configuration options
     */
    var ColVis = function( oDTSettings, oInit )
    {
        /* Santiy check that we are a new instance */
        if ( !this.CLASS || this.CLASS != "ColVis" )
        {
            alert( "Warning: ColVis must be initialised with the keyword 'new'" );
        }
    
        if ( typeof oInit == 'undefined' )
        {
            oInit = {};
        }
    
        var camelToHungarian = $.fn.dataTable.camelToHungarian;
        if ( camelToHungarian ) {
            camelToHungarian( ColVis.defaults, ColVis.defaults, true );
            camelToHungarian( ColVis.defaults, oInit );
        }
    
    
        /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
         * Public class variables
         * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    
        /**
         * @namespace Settings object which contains customisable information for
         *     ColVis instance. Augmented by ColVis.defaults
         */
        this.s = {
            /**
             * DataTables settings object
             *  @property dt
             *  @type     Object
             *  @default  null
             */
            "dt": null,
    
            /**
             * Customisation object
             *  @property oInit
             *  @type     Object
             *  @default  passed in
             */
            "oInit": oInit,
    
            /**
             * Flag to say if the collection is hidden
             *  @property hidden
             *  @type     boolean
             *  @default  true
             */
            "hidden": true,
    
            /**
             * Store the original visibility settings so they could be restored
             *  @property abOriginal
             *  @type     Array
             *  @default  []
             */
            "abOriginal": []
        };
    
    
        /**
         * @namespace Common and useful DOM elements for the class instance
         */
        this.dom = {
            /**
             * Wrapper for the button - given back to DataTables as the node to insert
             *  @property wrapper
             *  @type     Node
             *  @default  null
             */
            "wrapper": null,
    
            /**
             * Activation button
             *  @property button
             *  @type     Node
             *  @default  null
             */
            "button": null,
    
            /**
             * Collection list node
             *  @property collection
             *  @type     Node
             *  @default  null
             */
            "collection": null,
    
            /**
             * Background node used for shading the display and event capturing
             *  @property background
             *  @type     Node
             *  @default  null
             */
            "background": null,
    
            /**
             * Element to position over the activation button to catch mouse events when using mouseover
             *  @property catcher
             *  @type     Node
             *  @default  null
             */
            "catcher": null,
    
            /**
             * List of button elements
             *  @property buttons
             *  @type     Array
             *  @default  []
             */
            "buttons": [],
    
            /**
             * List of group button elements
             *  @property groupButtons
             *  @type     Array
             *  @default  []
             */
            "groupButtons": [],
    
            /**
             * Restore button
             *  @property restore
             *  @type     Node
             *  @default  null
             */
            "restore": null
        };
    
        /* Store global reference */
        ColVis.aInstances.push( this );
    
        /* Constructor logic */
        this.s.dt = $.fn.dataTable.Api ?
            new $.fn.dataTable.Api( oDTSettings ).settings()[0] :
            oDTSettings;
    
        this._fnConstruct( oInit );
        return this;
    };
    
    
    
    ColVis.prototype = {
        /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
         * Public methods
         * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    
        /**
         * Get the ColVis instance's control button so it can be injected into the
         * DOM
         *  @method  button
         *  @returns {node} ColVis button
         */
        button: function ()
        {
            return this.dom.wrapper;
        },
    
        /**
         * Alias of `rebuild` for backwards compatibility
         *  @method  fnRebuild
         */
        "fnRebuild": function ()
        {
            this.rebuild();
        },
    
        /**
         * Rebuild the list of buttons for this instance (i.e. if there is a column
         * header update)
         *  @method  fnRebuild
         */
        rebuild: function ()
        {
            /* Remove the old buttons */
            for ( var i=this.dom.buttons.length-1 ; i>=0 ; i-- ) {
                this.dom.collection.removeChild( this.dom.buttons[i] );
            }
            this.dom.buttons.splice( 0, this.dom.buttons.length );
            this.dom.groupButtons.splice(0, this.dom.groupButtons.length);
    
            if ( this.dom.restore ) {
                this.dom.restore.parentNode( this.dom.restore );
            }
    
            /* Re-add them (this is not the optimal way of doing this, it is fast and effective) */
            this._fnAddGroups();
            this._fnAddButtons();
    
            /* Update the checkboxes */
            this._fnDrawCallback();
        },
    
    
        /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
         * Private methods (they are of course public in JS, but recommended as private)
         * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    
        /**
         * Constructor logic
         *  @method  _fnConstruct
         *  @returns void
         *  @private
         */
        "_fnConstruct": function ( init )
        {
            this._fnApplyCustomisation( init );
    
            var that = this;
            var i, iLen;
            this.dom.wrapper = document.createElement('div');
            this.dom.wrapper.className = "ColVis";
    
            this.dom.button = $( '<button />', {
                    'class': !this.s.dt.bJUI ?
                        "ColVis_Button ColVis_MasterButton" :
                        "ColVis_Button ColVis_MasterButton ui-button ui-state-default"
                } )
                .append( '<span>'+this.s.buttonText+'</span>' )
                .bind( this.s.activate=="mouseover" ? "mouseover" : "click", function (e) {
                    e.preventDefault();
                    that._fnCollectionShow();
                } )
                .appendTo( this.dom.wrapper )[0];
    
            this.dom.catcher = this._fnDomCatcher();
            this.dom.collection = this._fnDomCollection();
            this.dom.background = this._fnDomBackground();
    
            this._fnAddGroups();
            this._fnAddButtons();
    
            /* Store the original visibility information */
            for ( i=0, iLen=this.s.dt.aoColumns.length ; i<iLen ; i++ )
            {
                this.s.abOriginal.push( this.s.dt.aoColumns[i].bVisible );
            }
    
            /* Update on each draw */
            this.s.dt.aoDrawCallback.push( {
                "fn": function () {
                    that._fnDrawCallback.call( that );
                },
                "sName": "ColVis"
            } );
    
            /* If columns are reordered, then we need to update our exclude list and
             * rebuild the displayed list
             */
            $(this.s.dt.oInstance).bind( 'column-reorder.dt', function ( e, oSettings, oReorder ) {
                for ( i=0, iLen=that.s.aiExclude.length ; i<iLen ; i++ ) {
                    that.s.aiExclude[i] = oReorder.aiInvertMapping[ that.s.aiExclude[i] ];
                }
    
                var mStore = that.s.abOriginal.splice( oReorder.iFrom, 1 )[0];
                that.s.abOriginal.splice( oReorder.iTo, 0, mStore );
    
                that.fnRebuild();
            } );
    
            $(this.s.dt.oInstance).bind( 'destroy.dt', function () {
                $(that.dom.wrapper).remove();
            } );
    
            // Set the initial state
            this._fnDrawCallback();
        },
    
    
        /**
         * Apply any customisation to the settings from the DataTables initialisation
         *  @method  _fnApplyCustomisation
         *  @returns void
         *  @private
         */
        "_fnApplyCustomisation": function ( init )
        {
            $.extend( true, this.s, ColVis.defaults, init );
    
            // Slightly messy overlap for the camelCase notation
            if ( ! this.s.showAll && this.s.bShowAll ) {
                this.s.showAll = this.s.sShowAll;
            }
    
            if ( ! this.s.restore && this.s.bRestore ) {
                this.s.restore = this.s.sRestore;
            }
    
            // CamelCase to Hungarian for the column groups 
            var groups = this.s.groups;
            var hungarianGroups = this.s.aoGroups;
            if ( groups ) {
                for ( var i=0, ien=groups.length ; i<ien ; i++ ) {
                    if ( groups[i].title ) {
                        hungarianGroups[i].sTitle = groups[i].title;
                    }
                    if ( groups[i].columns ) {
                        hungarianGroups[i].aiColumns = groups[i].columns;
                    }
                }
            }
        },
    
    
        /**
         * On each table draw, check the visibility checkboxes as needed. This allows any process to
         * update the table's column visibility and ColVis will still be accurate.
         *  @method  _fnDrawCallback
         *  @returns void
         *  @private
         */
        "_fnDrawCallback": function ()
        {
            var columns = this.s.dt.aoColumns;
            var buttons = this.dom.buttons;
            var groups = this.s.aoGroups;
            var button;
    
            for ( var i=0, ien=buttons.length ; i<ien ; i++ ) {
                button = buttons[i];
    
                if ( button.__columnIdx !== undefined ) {
                    $('input', button).prop( 'checked', columns[ button.__columnIdx ].bVisible );
                }
            }
    
            var allVisible = function ( columnIndeces ) {
                for ( var k=0, kLen=columnIndeces.length ; k<kLen ; k++ )
                {
                    if (  columns[columnIndeces[k]].bVisible === false ) { return false; }
                }
                return true;
            };
            var allHidden = function ( columnIndeces ) {
                for ( var m=0 , mLen=columnIndeces.length ; m<mLen ; m++ )
                {
                    if ( columns[columnIndeces[m]].bVisible === true ) { return false; }
                }
                return true;
            };
    
            for ( var j=0, jLen=groups.length ; j<jLen ; j++ )
            {
                if ( allVisible(groups[j].aiColumns) )
                {
                    $('input', this.dom.groupButtons[j]).prop('checked', true);
                    $('input', this.dom.groupButtons[j]).prop('indeterminate', false);
                }
                else if ( allHidden(groups[j].aiColumns) )
                {
                    $('input', this.dom.groupButtons[j]).prop('checked', false);
                    $('input', this.dom.groupButtons[j]).prop('indeterminate', false);
                }
                else
                {
                    $('input', this.dom.groupButtons[j]).prop('indeterminate', true);
                }
            }
        },
    
    
        /**
         * Loop through the groups (provided in the settings) and create a button for each.
         *  @method  _fnAddgroups
         *  @returns void
         *  @private
         */
        "_fnAddGroups": function ()
        {
            var nButton;
    
            if ( typeof this.s.aoGroups != 'undefined' )
            {
                for ( var i=0, iLen=this.s.aoGroups.length ; i<iLen ; i++ )
                {
                    nButton = this._fnDomGroupButton( i );
                    this.dom.groupButtons.push( nButton );
                    this.dom.buttons.push( nButton );
                    this.dom.collection.appendChild( nButton );
                }
            }
        },
    
    
        /**
         * Loop through the columns in the table and as a new button for each one.
         *  @method  _fnAddButtons
         *  @returns void
         *  @private
         */
        "_fnAddButtons": function ()
        {
            var
                nButton,
                columns = this.s.dt.aoColumns;
    
            if ( $.inArray( 'all', this.s.aiExclude ) === -1 ) {
                for ( var i=0, iLen=columns.length ; i<iLen ; i++ )
                {
                    if ( $.inArray( i, this.s.aiExclude ) === -1 )
                    {
                        nButton = this._fnDomColumnButton( i );
                        nButton.__columnIdx = i;
                        this.dom.buttons.push( nButton );
                    }
                }
            }
    
            if ( this.s.order === 'alpha' ) {
                this.dom.buttons.sort( function ( a, b ) {
                    var titleA = columns[ a.__columnIdx ].sTitle;
                    var titleB = columns[ b.__columnIdx ].sTitle;
    
                    return titleA === titleB ?
                        0 :
                        titleA < titleB ?
                            -1 :
                            1;
                } );
            }
    
            if ( this.s.restore )
            {
                nButton = this._fnDomRestoreButton();
                nButton.className += " ColVis_Restore";
                this.dom.buttons.push( nButton );
            }
    
            if ( this.s.showAll )
            {
                nButton = this._fnDomShowXButton( this.s.showAll, true );
                nButton.className += " ColVis_ShowAll";
                this.dom.buttons.push( nButton );
            }
    
            if ( this.s.showNone )
            {
                nButton = this._fnDomShowXButton( this.s.showNone, false );
                nButton.className += " ColVis_ShowNone";
                this.dom.buttons.push( nButton );
            }
    
            $(this.dom.collection).append( this.dom.buttons );
        },
    
    
        /**
         * Create a button which allows a "restore" action
         *  @method  _fnDomRestoreButton
         *  @returns {Node} Created button
         *  @private
         */
        "_fnDomRestoreButton": function ()
        {
            var
                that = this,
                dt = this.s.dt;
    
            return $(
                    '<li class="ColVis_Special '+(dt.bJUI ? 'ui-button ui-state-default' : '')+'">'+
                        this.s.restore+
                    '</li>'
                )
                .click( function (e) {
                    for ( var i=0, iLen=that.s.abOriginal.length ; i<iLen ; i++ )
                    {
                        that.s.dt.oInstance.fnSetColumnVis( i, that.s.abOriginal[i], false );
                    }
                    that._fnAdjustOpenRows();
                    that.s.dt.oInstance.fnAdjustColumnSizing( false );
                    that.s.dt.oInstance.fnDraw( false );
                } )[0];
        },
    
    
        /**
         * Create a button which allows show all and show node actions
         *  @method  _fnDomShowXButton
         *  @returns {Node} Created button
         *  @private
         */
        "_fnDomShowXButton": function ( str, action )
        {
            var
                that = this,
                dt = this.s.dt;
    
            return $(
                    '<li class="ColVis_Special '+(dt.bJUI ? 'ui-button ui-state-default' : '')+'">'+
                        str+
                    '</li>'
                )
                .click( function (e) {
                    for ( var i=0, iLen=that.s.abOriginal.length ; i<iLen ; i++ )
                    {
                        if (that.s.aiExclude.indexOf(i) === -1)
                        {
                            that.s.dt.oInstance.fnSetColumnVis( i, action, false );
                        }
                    }
                    that._fnAdjustOpenRows();
                    that.s.dt.oInstance.fnAdjustColumnSizing( false );
                    that.s.dt.oInstance.fnDraw( false );
                } )[0];
        },
    
    
        /**
         * Create the DOM for a show / hide group button
         *  @method  _fnDomGroupButton
         *  @param {int} i Group in question, order based on that provided in settings
         *  @returns {Node} Created button
         *  @private
         */
        "_fnDomGroupButton": function ( i )
        {
            var
                that = this,
                dt = this.s.dt,
                oGroup = this.s.aoGroups[i];
    
            return $(
                    '<li class="ColVis_Special '+(dt.bJUI ? 'ui-button ui-state-default' : '')+'">'+
                        '<label>'+
                            '<input type="checkbox" />'+
                            '<span>'+oGroup.sTitle+'</span>'+
                        '</label>'+
                    '</li>'
                )
                .click( function (e) {
                    var showHide = !$('input', this).is(":checked");
                    if (  e.target.nodeName.toLowerCase() !== "li" )
                    {
                        showHide = ! showHide;
                    }
    
                    for ( var j=0 ; j < oGroup.aiColumns.length ; j++ )
                    {
                        that.s.dt.oInstance.fnSetColumnVis( oGroup.aiColumns[j], showHide );
                    }
                } )[0];
        },
    
    
        /**
         * Create the DOM for a show / hide button
         *  @method  _fnDomColumnButton
         *  @param {int} i Column in question
         *  @returns {Node} Created button
         *  @private
         */
        "_fnDomColumnButton": function ( i )
        {
            var
                that = this,
                column = this.s.dt.aoColumns[i],
                dt = this.s.dt;
    
            var title = this.s.fnLabel===null ?
                column.sTitle :
                this.s.fnLabel( i, column.sTitle, column.nTh );
    
            return $(
                    '<li '+(dt.bJUI ? 'class="ui-button ui-state-default"' : '')+'>'+
                        '<label>'+
                            '<input type="checkbox" />'+
                            '<span>'+title+'</span>'+
                        '</label>'+
                    '</li>'
                )
                .click( function (e) {
                    var showHide = !$('input', this).is(":checked");
                    if (  e.target.nodeName.toLowerCase() !== "li" )
                    {
                        if ( e.target.nodeName.toLowerCase() == "input" || that.s.fnStateChange === null )
                        {
                            showHide = ! showHide;
                        }
                    }
    
                    /* Need to consider the case where the initialiser created more than one table - change the
                     * API index that DataTables is using
                     */
                    var oldIndex = $.fn.dataTableExt.iApiIndex;
                    $.fn.dataTableExt.iApiIndex = that._fnDataTablesApiIndex.call(that);
    
                    // Optimisation for server-side processing when scrolling - don't do a full redraw
                    if ( dt.oFeatures.bServerSide )
                    {
                        that.s.dt.oInstance.fnSetColumnVis( i, showHide, false );
                        that.s.dt.oInstance.fnAdjustColumnSizing( false );
                        if (dt.oScroll.sX !== "" || dt.oScroll.sY !== "" )
                        {
                            that.s.dt.oInstance.oApi._fnScrollDraw( that.s.dt );
                        }
                        that._fnDrawCallback();
                    }
                    else
                    {
                        that.s.dt.oInstance.fnSetColumnVis( i, showHide );
                    }
    
                    $.fn.dataTableExt.iApiIndex = oldIndex; /* Restore */
    
                    if ( that.s.fnStateChange !== null )
                    {
                        if ( e.target.nodeName.toLowerCase() == "span" )
                        {
                            e.preventDefault();
                        }
                        that.s.fnStateChange.call( that, i, showHide );
                    }
                } )[0];
        },
    
    
        /**
         * Get the position in the DataTables instance array of the table for this
         * instance of ColVis
         *  @method  _fnDataTablesApiIndex
         *  @returns {int} Index
         *  @private
         */
        "_fnDataTablesApiIndex": function ()
        {
            for ( var i=0, iLen=this.s.dt.oInstance.length ; i<iLen ; i++ )
            {
                if ( this.s.dt.oInstance[i] == this.s.dt.nTable )
                {
                    return i;
                }
            }
            return 0;
        },
    
    
        /**
         * Create the element used to contain list the columns (it is shown and
         * hidden as needed)
         *  @method  _fnDomCollection
         *  @returns {Node} div container for the collection
         *  @private
         */
        "_fnDomCollection": function ()
        {
            return $('<ul />', {
                    'class': !this.s.dt.bJUI ?
                        "ColVis_collection" :
                        "ColVis_collection ui-buttonset ui-buttonset-multi"
                } )
            .css( {
                'display': 'none',
                'opacity': 0,
                'position': ! this.s.bCssPosition ?
                    'absolute' :
                    ''
            } )[0];
        },
    
    
        /**
         * An element to be placed on top of the activate button to catch events
         *  @method  _fnDomCatcher
         *  @returns {Node} div container for the collection
         *  @private
         */
        "_fnDomCatcher": function ()
        {
            var
                that = this,
                nCatcher = document.createElement('div');
            nCatcher.className = "ColVis_catcher";
    
            $(nCatcher).click( function () {
                that._fnCollectionHide.call( that, null, null );
            } );
    
            return nCatcher;
        },
    
    
        /**
         * Create the element used to shade the background, and capture hide events (it is shown and
         * hidden as needed)
         *  @method  _fnDomBackground
         *  @returns {Node} div container for the background
         *  @private
         */
        "_fnDomBackground": function ()
        {
            var that = this;
    
            var background = $('<div></div>')
                .addClass( 'ColVis_collectionBackground' )
                .css( 'opacity', 0 )
                .click( function () {
                    that._fnCollectionHide.call( that, null, null );
                } );
    
            /* When considering a mouse over action for the activation, we also consider a mouse out
             * which is the same as a mouse over the background - without all the messing around of
             * bubbling events. Use the catcher element to avoid messing around with bubbling
             */
            if ( this.s.activate == "mouseover" )
            {
                background.mouseover( function () {
                    that.s.overcollection = false;
                    that._fnCollectionHide.call( that, null, null );
                } );
            }
    
            return background[0];
        },
    
    
        /**
         * Show the show / hide list and the background
         *  @method  _fnCollectionShow
         *  @returns void
         *  @private
         */
        "_fnCollectionShow": function ()
        {
            var that = this, i, iLen, iLeft;
            var oPos = $(this.dom.button).offset();
            var nHidden = this.dom.collection;
            var nBackground = this.dom.background;
            var iDivX = parseInt(oPos.left, 10);
            var iDivY = parseInt(oPos.top + $(this.dom.button).outerHeight(), 10);
    
            if ( ! this.s.bCssPosition )
            {
                nHidden.style.top = iDivY+"px";
                nHidden.style.left = iDivX+"px";
            }
    
            $(nHidden).css( {
                'display': 'block',
                'opacity': 0
            } );
    
            nBackground.style.bottom ='0px';
            nBackground.style.right = '0px';
    
            var oStyle = this.dom.catcher.style;
            oStyle.height = $(this.dom.button).outerHeight()+"px";
            oStyle.width = $(this.dom.button).outerWidth()+"px";
            oStyle.top = oPos.top+"px";
            oStyle.left = iDivX+"px";
    
            document.body.appendChild( nBackground );
            document.body.appendChild( nHidden );
            document.body.appendChild( this.dom.catcher );
    
            /* This results in a very small delay for the end user but it allows the animation to be
             * much smoother. If you don't want the animation, then the setTimeout can be removed
             */
            $(nHidden).animate({"opacity": 1}, that.s.iOverlayFade);
            $(nBackground).animate({"opacity": 0.1}, that.s.iOverlayFade, 'linear', function () {
                /* In IE6 if you set the checked attribute of a hidden checkbox, then this is not visually
                 * reflected. As such, we need to do it here, once it is visible. Unbelievable.
                 */
                if ( $.browser && $.browser.msie && $.browser.version == "6.0" )
                {
                    that._fnDrawCallback();
                }
            });
    
            /* Visual corrections to try and keep the collection visible */
            if ( !this.s.bCssPosition )
            {
                iLeft = ( this.s.sAlign=="left" ) ?
                    iDivX :
                    iDivX - $(nHidden).outerWidth() + $(this.dom.button).outerWidth();
    
                nHidden.style.left = iLeft+"px";
    
                var iDivWidth = $(nHidden).outerWidth();
                var iDivHeight = $(nHidden).outerHeight();
                var iDocWidth = $(document).width();
    
                if ( iLeft + iDivWidth > iDocWidth )
                {
                    nHidden.style.left = (iDocWidth-iDivWidth)+"px";
                }
            }
    
            this.s.hidden = false;
        },
    
    
        /**
         * Hide the show / hide list and the background
         *  @method  _fnCollectionHide
         *  @returns void
         *  @private
         */
        "_fnCollectionHide": function (  )
        {
            var that = this;
    
            if ( !this.s.hidden && this.dom.collection !== null )
            {
                this.s.hidden = true;
    
                $(this.dom.collection).animate({"opacity": 0}, that.s.iOverlayFade, function (e) {
                    this.style.display = "none";
                } );
    
                $(this.dom.background).animate({"opacity": 0}, that.s.iOverlayFade, function (e) {
                    document.body.removeChild( that.dom.background );
                    document.body.removeChild( that.dom.catcher );
                } );
            }
        },
    
    
        /**
         * Alter the colspan on any fnOpen rows
         */
        "_fnAdjustOpenRows": function ()
        {
            var aoOpen = this.s.dt.aoOpenRows;
            var iVisible = this.s.dt.oApi._fnVisbleColumns( this.s.dt );
    
            for ( var i=0, iLen=aoOpen.length ; i<iLen ; i++ ) {
                aoOpen[i].nTr.getElementsByTagName('td')[0].colSpan = iVisible;
            }
        }
    };
    
    
    
    
    
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * Static object methods
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    
    /**
     * Rebuild the collection for a given table, or all tables if no parameter given
     *  @method  ColVis.fnRebuild
     *  @static
     *  @param   object oTable DataTable instance to consider - optional
     *  @returns void
     */
    ColVis.fnRebuild = function ( oTable )
    {
        var nTable = null;
        if ( typeof oTable != 'undefined' )
        {
            nTable = $.fn.dataTable.Api ?
                new $.fn.dataTable.Api( oTable ).table().node() :
                oTable.fnSettings().nTable;
        }
    
        for ( var i=0, iLen=ColVis.aInstances.length ; i<iLen ; i++ )
        {
            if ( typeof oTable == 'undefined' || nTable == ColVis.aInstances[i].s.dt.nTable )
            {
                ColVis.aInstances[i].fnRebuild();
            }
        }
    };
    
    
    ColVis.defaults = {
        /**
         * Mode of activation. Can be 'click' or 'mouseover'
         *  @property activate
         *  @type     string
         *  @default  click
         */
        active: 'click',
    
        /**
         * Text used for the button
         *  @property buttonText
         *  @type     string
         *  @default  Show / hide columns
         */
        buttonText: 'Show / hide columns',
    
        /**
         * List of columns (integers) which should be excluded from the list
         *  @property aiExclude
         *  @type     array
         *  @default  []
         */
        aiExclude: [],
    
        /**
         * Show restore button
         *  @property bRestore
         *  @type     boolean
         *  @default  false
         */
        bRestore: false,
    
        /**
         * Restore button text
         *  @property sRestore
         *  @type     string
         *  @default  Restore original
         */
        sRestore: 'Restore original',
    
        /**
         * Show Show-All button
         *  @property bShowAll
         *  @type     boolean
         *  @default  false
         */
        bShowAll: false,
    
        /**
         * Show All button text
         *  @property sShowAll
         *  @type     string
         *  @default  Restore original
         */
        sShowAll: 'Show All',
    
        /**
         * Position of the collection menu when shown - align "left" or "right"
         *  @property sAlign
         *  @type     string
         *  @default  left
         */
        sAlign: 'left',
    
        /**
         * Callback function to tell the user when the state has changed
         *  @property fnStateChange
         *  @type     function
         *  @default  null
         */
        fnStateChange: null,
    
        /**
         * Overlay animation duration in mS
         *  @property iOverlayFade
         *  @type     integer|false
         *  @default  500
         */
        iOverlayFade: 500,
    
        /**
         * Label callback for column names. Takes three parameters: 1. the
         * column index, 2. the column title detected by DataTables and 3. the
         * TH node for the column
         *  @property fnLabel
         *  @type     function
         *  @default  null
         */
        fnLabel: null,
    
        /**
         * Indicate if the column list should be positioned by Javascript,
         * visually below the button or allow CSS to do the positioning
         *  @property bCssPosition
         *  @type     boolean
         *  @default  false
         */
        bCssPosition: false,
    
        /**
         * Group buttons
         *  @property aoGroups
         *  @type     array
         *  @default  []
         */
        aoGroups: [],
    
        /**
         * Button ordering - 'alpha' (alphabetical) or 'column' (table column
         * order)
         *  @property order
         *  @type     string
         *  @default  column
         */
        order: 'column'
    };
    
    
    
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * Static object properties
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    
    /**
     * Collection of all ColVis instances
     *  @property ColVis.aInstances
     *  @static
     *  @type     Array
     *  @default  []
     */
    ColVis.aInstances = [];
    
    
    
    
    
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * Constants
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    
    /**
     * Name of this class
     *  @constant CLASS
     *  @type     String
     *  @default  ColVis
     */
    ColVis.prototype.CLASS = "ColVis";
    
    
    /**
     * ColVis version
     *  @constant  VERSION
     *  @type      String
     *  @default   See code
     */
    ColVis.VERSION = "1.1.2";
    ColVis.prototype.VERSION = ColVis.VERSION;
    
    
    
    
    
    /* * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * *
     * Initialisation
     * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * * */
    
    /*
     * Register a new feature with DataTables
     */
    if ( typeof $.fn.dataTable == "function" &&
         typeof $.fn.dataTableExt.fnVersionCheck == "function" &&
         $.fn.dataTableExt.fnVersionCheck('1.7.0') )
    {
        $.fn.dataTableExt.aoFeatures.push( {
            "fnInit": function( oDTSettings ) {
                var init = oDTSettings.oInit;
                var colvis = new ColVis( oDTSettings, init.colVis || init.oColVis || {} );
                return colvis.button();
            },
            "cFeature": "C",
            "sFeature": "ColVis"
        } );
    }
    else
    {
        alert( "Warning: ColVis requires DataTables 1.7 or greater - www.datatables.net/download");
    }
    
    
    // Make ColVis accessible from the DataTables instance
    $.fn.dataTable.ColVis = ColVis;
    $.fn.DataTable.ColVis = ColVis;
    
    
    return ColVis;
    }; // /factory
    
    
    // Define as an AMD module if possible
    if ( typeof define === 'function' && define.amd ) {
        define( ['jquery', 'datatables'], factory );
    }
    else if ( typeof exports === 'object' ) {
        // Node/CommonJS
        factory( require('jquery'), require('datatables') );
    }
    else if ( jQuery && !jQuery.fn.dataTable.ColVis ) {
        // Otherwise simply initialise as normal, stopping multiple evaluation
        factory( jQuery, jQuery.fn.dataTable );
    }
    
    
    })(window, document);
    
}

/* DT_bootstrap.js */
function dtBootstrap() {
    /* Default class modification */
    $.extend( $.fn.dataTableExt.oStdClasses, {
        "sWrapper": "dataTables_wrapper"
    } );

    /* API method to get paging information */
    $.fn.dataTableExt.oApi.fnPagingInfo = function ( oSettings )
    {
        return {
            "iStart":         oSettings._iDisplayStart,
            "iEnd":           oSettings.fnDisplayEnd(),
            "iLength":        oSettings._iDisplayLength,
            "iTotal":         oSettings.fnRecordsTotal(),
            "iFilteredTotal": oSettings.fnRecordsDisplay(),
            "iPage":          Math.ceil( oSettings._iDisplayStart / oSettings._iDisplayLength ),
            "iTotalPages":    Math.ceil( oSettings.fnRecordsDisplay() / oSettings._iDisplayLength )
        };
    }

    /* Bootstrap style pagination control */
    $.extend( $.fn.dataTableExt.oPagination, {
        "bootstrap": {
            "fnInit": function( oSettings, nPaging, fnDraw ) {
                var oLang = oSettings.oLanguage.oPaginate;
                var fnClickHandler = function ( e ) {
                    e.preventDefault();
                    if ( oSettings.oApi._fnPageChange(oSettings, e.data.action) ) {
                        fnDraw( oSettings );
                    }
                };

                $(nPaging).append(
                    '<ul class="pagination">' +
                    '<li class="page-item prev disabled"><a class="page-link" href="#">&larr; ' + oLang.sFirst + '</a></li>' +
                    '<li class="page-item prev disabled"><a class="page-link" href="#">&larr; '+oLang.sPrevious+'</a></li>'+
                    '<li class="page-item next disabled"><a class="page-link" href="#">' + oLang.sNext + ' &rarr; </a></li>' +
                    '<li class="page-item next disabled"><a class="page-link" href="#">' + oLang.sLast + ' &rarr; </a></li>' +
                    '</ul>'
                );
                var els = $('a', nPaging);
                $(els[0]).bind('click.DT', { action: "first" }, fnClickHandler);
                $(els[1]).bind( 'click.DT', { action: "previous" }, fnClickHandler );
                $(els[2]).bind('click.DT', { action: "next" }, fnClickHandler);
                $(els[3]).bind('click.DT', { action: "last" }, fnClickHandler);
            },

            "fnUpdate": function ( oSettings, fnDraw ) {
                var iListLength = 5;
                var oPaging = oSettings.oInstance.fnPagingInfo();
                var an = oSettings.aanFeatures.p;
                var i, j, sClass, iStart, iEnd, iHalf=Math.floor(iListLength/2);

                if ( oPaging.iTotalPages < iListLength) {
                    iStart = 1;
                    iEnd = oPaging.iTotalPages;
                }
                else if ( oPaging.iPage <= iHalf ) {
                    iStart = 1;
                    iEnd = iListLength;
                } else if ( oPaging.iPage >= (oPaging.iTotalPages-iHalf) ) {
                    iStart = oPaging.iTotalPages - iListLength + 1;
                    iEnd = oPaging.iTotalPages;
                } else {
                    iStart = oPaging.iPage - iHalf + 1;
                    iEnd = iStart + iListLength - 1;
                }

                for ( i=0, iLen=an.length ; i<iLen ; i++ ) {
                    // Remove the middle elements
                    $('li:gt(1)', an[i]).filter(':not(.next)').remove();

                    // Add the new list items and their event handlers
                    for ( j=iStart ; j<=iEnd ; j++ ) {
                        sClass = (j==oPaging.iPage+1) ? 'class="page-item active"' : '';
                        $('<li '+sClass+'><a class="page-link" href="#">'+j+'</a></li>')
                            .insertBefore( $('li.next:first', an[i])[0] )
                            .bind('click', function (e) {
                                e.preventDefault();
                                oSettings._iDisplayStart = (parseInt($('a', this).text(),10)-1) * oPaging.iLength;
                                fnDraw( oSettings );
                            } );
                    }

                    // Add / remove disabled classes from the static elements
                    if ( oPaging.iPage === 0 ) {
                        $('li.prev', an[i]).addClass('disabled');
                    } else {
                        $('li.prev', an[i]).removeClass('disabled');
                    }

                    if ( oPaging.iPage === oPaging.iTotalPages-1 || oPaging.iTotalPages === 0 ) {
                        $('li.next', an[i]).addClass('disabled');
                    } else {
                        $('li.next', an[i]).removeClass('disabled');
                    }
                }
            }
        }
    } );


    /*
     * TableTools Bootstrap compatibility
     * Required TableTools 2.1+
     */
    if ( $.fn.DataTable.TableTools ) {
        // Set the classes that TableTools uses to something suitable for Bootstrap
        $.extend( true, $.fn.DataTable.TableTools.classes, {
            "container": "DTTT btn-group",
            "buttons": {
                "normal": "btn btn-primary",
                "disabled": "disabled"
            },
            "collection": {
                "container": "DTTT_dropdown dropdown-menu",
                "buttons": {
                    "normal": "",
                    "disabled": "disabled"
                }
            },
            "print": {
                "info": "DTTT_print_info modal"
            },
            "select": {
                "row": "active"
            }
        } );

        // Have the collection use a bootstrap compatible dropdown
        $.extend( true, $.fn.DataTable.TableTools.DEFAULTS.oTags, {
            "collection": {
                "container": "ul",
                "button": "li",
                "liner": "a"
            }
        } );
    }
}

/* datatables.init.js */
function dataTablesInit() {

    (function ($, window) {
        function fnInitCompleteCallback(that) {
            var p = that.parents('.dataTables_wrapper').first();
            var l = p.find('.row').find('label');

            l.each(function(index, el) {
                var iw = $("<div>").addClass('col-md-8').appendTo($(el).parent());
                $(el).parent().addClass('form-group margin-none').parent().addClass('form-horizontal');
                $(el).find('input, select').addClass('form-control').removeAttr('size').appendTo(iw);
                $(el).addClass('col-md-4 control-label');
            });

            var s = p.find('select');
                    s.addClass('selectpicker').selectpicker();

            //$(".bootstrap-select .dropdown-toggle .filter-option").append("<span class='caret'></span>");
            var dtId = that.parents('.dataTables_wrapper').attr("id");
                $("#"+dtId).find(".bootstrap-select .dropdown-toggle").append("<span class='caret'></span>");
        }


        /* DataTables */
        componentsPath = "";
        if ( $('.design-table').length > 0 ) {
            $('.design-table').each(function() {
                // DataTables with TableTools
                if ( $(this).is('.tableTools') ) {
                    $(this).dataTable({
                        "sPaginationType": "bootstrap",
                        "sDom": "<'row d-flex flex-row justify-content-between separator bottom table-tools'<'col-md-5'T><'col-md-3'l><'col-md-4'f>r>t<'row'<'col-md-6'i><'col-md-6'p>>",
                        "oLanguage": {
                            "sLengthMenu": "_MENU_ Show"
                        },
                        "oTableTools": {
                            // "sSwfPath": componentsPath + "/media/extras/TableTools/media/swf/copy_csv_xls_pdf.swf",
                            // "sSwfPath": "/MelisDesign/extras/TableTools/media/swf/copy_csv_xls_pdf.swf",
                            "sSwfPath": "//cdn.datatables.net/tabletools/2.2.2/swf/copy_csv_xls_pdf.swf"
                            // "sSwfPath": "http://cdn.datatables.net/tabletools/2.2.4/swf/copy_csv_xls_pdf.swf",
                            // "sSwfPath": "http://www.melis-develop.local/MelisDesign/extras/TableTools/media/swf/copy_csv_xls_pdf.swf",

                        },
                        "aoColumnDefs": [
                            { 'bSortable': false, 'aTargets': [ 0 ] }
                        ],
                        "sScrollX": "100%",
                        "sScrollXInner": "100%",
                        "bScrollCollapse": true,
                        "fnInitComplete": function () {
                            fnInitCompleteCallback(this);
                        }
                    });
                }
                // colVis extras initialization
                else if ($(this).is('.colVis')) {
                    $(this).dataTable({
                        "sPaginationType": "bootstrap",
                        "sDom": "<'row separator bottom d-flex flex-row'<'col-md-3'f><'col-md-3'l><'col-md-6'C>r>t<'row'<'col-md-6'i><'col-md-6'p>>",
                        "oLanguage": {
                            "sLengthMenu": "_MENU_ per page"
                        },
                        "oColVis": {
                            "buttonText": "Show / Hide Columns",
                            "sAlign": "right"
                        },
                        "sScrollX": "100%",
                        "sScrollXInner": "100%",
                        "bScrollCollapse": true,
                        "fnInitComplete": function () {
                            fnInitCompleteCallback(this);
                        }
                    });
                }
                else if ($(this).is('.scrollVertical')) {
                    $(this).dataTable({
                        "bPaginate": false,
                        "sScrollY": "200px",
                        "sScrollX": "100%",
                        "sScrollXInner": "100%",
                        "bScrollCollapse": true,
                        "sDom": "<'row separator bottom d-flex flex-row'<'col-md-12'f>r>t<'row'<'col-md-6'i><'col-md-6'p>>",
                        "fnInitComplete": function () {
                            fnInitCompleteCallback(this);
                        }
                    });
                }
                else if ($(this).is('.ajax')) {
                    $(this).dataTable({
                        "sPaginationType": "bootstrap",
                        "bProcessing": true,
                        "sAjaxSource": rootPath + 'admin/ajax/DataTables.json',
                        "sDom": "<'row separator bottom d-flex flex-row'<'col-md-12'f>r>t<'row'<'col-md-6'i><'col-md-6'p>>",
                        "sScrollX": "100%",
                        "sScrollXInner": "100%",
                        "bScrollCollapse": true,
                        "fnInitComplete": function () {
                            fnInitCompleteCallback(this);
                        }
                    });
                }
                else if ($(this).is('.fixedHeaderColReorder')) {
                    $(this).dataTable({
                        "sPaginationType": "bootstrap",
                        "sDom": "R<'clear'><'row separator bottom d-flex flex-row'<'col-md-12'f>r>t<'row'<'col-md-6'i><'col-md-6'p>>",
                        "sScrollX": "100%",
                        "sScrollXInner": "100%",
                        "bScrollCollapse": true,
                        "fnInitComplete": function () {
                            fnInitCompleteCallback(this);
                            var t = this;
                            setTimeout(function(){
                                new FixedHeader( t );
                            }, 1000);
                        }
                    });
                }
                // default initialization
                else {
                    $(this).dataTable({
                        "sPaginationType": "bootstrap",
                        "sDom": "<'row separator bottom d-flex flex-row'<'col-md-5'T><'col-md-3'l><'col-md-4'f>r>t<'row'<'col-md-6'i><'col-md-6'p>>",
                        "sScrollX": "100%",
                        "sScrollXInner": "100%",
                        "bScrollCollapse": true,
                        "oLanguage": {
                            "sLengthMenu": "_MENU_ per page"
                        },
                        "fnInitComplete": function () {
                            fnInitCompleteCallback(this);
                        }
                    });
                }
            });
        }
    })(jQuery, window);
}

/* mixitup.init.js */
function mixItUpInit() {
    $(function() {
        //var containerEl = document.querySelector('.mixitup');
        //$('.mixitup').mixitup({ showOnLoad: 'mixit-filter-1' });
        if ( $('.mixitup').length > 0 ) {
            mixitup('.mixitup', {
                load: {
                    sort: 'order:asc'
                },
                animation: {
                    effects: 'fade',
                    duration: 700
                },
                classNames: {
                    block: 'button-filters',
                    elementFilter: 'filter'
                },
                selectors: {
                    target: '.mix-target'
                }
            });
        }
    });
}

/* fuelux-checkbox */
function fueluxCheckBoxInit() {
    /*
     * Fuel UX Checkbox
     * https://github.com/ExactTarget/fuelux
     *
     * Copyright (c) 2012 ExactTarget
     * Licensed under the MIT license.
     */

    (function($){

        var old = $.fn.checkbox;

        // CHECKBOX CONSTRUCTOR AND PROTOTYPE

        var Checkbox = function (element, options) {

            this.$element = $(element);
            this.options = $.extend({}, $.fn.checkbox.defaults, options);

            // cache elements
            this.$label = this.$element.parent();
            this.$icon = this.$label.find('i');
            this.$chk = this.$label.find('input[type=checkbox]');

            // set default state
            this.setState(this.$chk);

            // handle events
            this.$chk.on('change', $.proxy(this.itemchecked, this));
        };

        Checkbox.prototype = {

            constructor: Checkbox,

            setState: function ($chk) {
                $chk = $chk || this.$chk;

                var checked = $chk.is(':checked');
                var disabled = !!$chk.prop('disabled');

                // reset classes
                this.$icon.removeClass('checked disabled');

                // set state of checkbox
                if (checked === true) {
                    this.$icon.addClass('checked');
                }
                if (disabled === true) {
                    this.$icon.addClass('disabled');
                }
            },

            enable: function () {
                this.$chk.attr('disabled', false);
                this.$icon.removeClass('disabled');
            },

            disable: function () {
                this.$chk.attr('disabled', true);
                this.$icon.addClass('disabled');
            },

            toggle: function () {
                this.$chk.click();
            },

            itemchecked: function (e) {
                var chk = $(e.target);
                this.setState(chk);
            },

            check: function () {
                this.$chk.prop('checked', true);
                this.setState(this.$chk);
            },

            uncheck: function () {
                this.$chk.prop('checked', false);
                this.setState(this.$chk);
            },

            isChecked: function () {
                return this.$chk.is(':checked');
            }
        };


        // CHECKBOX PLUGIN DEFINITION

        $.fn.checkbox = function (option) {
            var args = Array.prototype.slice.call( arguments, 1 );
            var methodReturn;

            var $set = this.each(function () {
                var $this   = $( this );
                var data    = $this.data('checkbox');
                var options = typeof option === 'object' && option;

                if( !data ) $this.data('checkbox', (data = new Checkbox(this, options)));
                if( typeof option === 'string' ) methodReturn = data[ option ].apply( data, args );
            });

            return ( methodReturn === undefined ) ? $set : methodReturn;
        };

        $.fn.checkbox.defaults = {};

        $.fn.checkbox.Constructor = Checkbox;

        $.fn.checkbox.noConflict = function () {
            $.fn.checkbox = old;
            return this;
        };


        // CHECKBOX DATA-API

        $(function () {
            $('.checkbox-custom > input[type=checkbox]').each(function() {
                var $this = $(this);

                    if ($this.data('checkbox')) return;
                        $this.checkbox($this.data());
            });
        });

    })(jQuery);
}

/* events-carousel.init.js */
function eventsCarouselInit() {
    //$(function() {
        //$("#events-carousel").owlCarousel();
        /* $("#events-carousel").owlCarousel({
            slideSpeed : 300,
            paginationSpeed : 400,
            singleItem:true
        }); */
        //$("#events-speakers").owlCarousel();
        /* $("#events-speakers").owlCarousel({
            slideSpeed : 300,
            paginationSpeed : 400,
            singleItem:true
        }); */
        if ( $(".events-tns").length > 0 ) {
            var eventsSlider = tns({
                  container: ".events-tns",
                  items: 1,
                  mouseDrag: true,
                  slideBy: "page",
                  swipeAngle: false,
                  speed: 500,
                  nav: true,
                  navPosition: "bottom",
                  navAsThumbnails: false
            });
        }

        if ( $(".speakers-tns").length > 0 ) {
            var speakerSlider = tns({
                  container: ".speakers-tns",
                  items: 1,
                  mouseDrag: true,
                  slideBy: "page",
                  swipeAngle: false,
                  speed: 500,
                  nav: true,
                  navPosition: "bottom",
                  navAsThumbnails: false
            });
        }
    //});
}

/* gridalicious.init.js */
function gridaliciousInit() {
    (function($) {
        $('[data-toggle="gridalicious"]').each(function(){
            var $that = $(this);
            
                $that.removeClass('hide2');

                $that.gridalicious({
                    gutter: 13, // $that.attr('data-gridalicious-gutter') || 
                    width: 200, // $that.attr('data-gridalicious-width') ? parseInt($that.attr('data-gridalicious-width')) : 
                    animate: true,
                    selector: '.widget'
                });
        });
    })(jQuery);
}

/* prettyphoto.init.js */
function prettyPhotoInit() {
    (function($) {
        /* if ($('[data-toggle="prettyPhoto"]').length)
            $('[data-toggle="prettyPhoto"]').prettyPhoto(); */

            /* if ( $("a[rel^='prettyPhoto']").length )
                $("a[rel^='prettyPhoto']").prettyPhoto(); */
            
            $("body").on("click", "a[rel^='prettyPhoto']", function(e) {
                e.preventDefault();
                $("a[rel^='prettyPhoto']").prettyPhoto();
            });
    })(jQuery);
}

/* jquery.bootpag.init.js */
function jqueryBootpagInit() {
    /*
     * JQuery Pagination Examples
     */

    $('.jquery-bootpag-pagination').bootpag({
        total: 23,
        page: 2,
        maxVisible: 10
    }).on('page', function(event, num){
        $(".jquery-bootpag-content").html("Page " + num); // or some ajax content loading ...
    });
}

/* bootstrap-select.init.js */
function bootstrapSelectInit() {
    if ( $('.selectpicker').length)
        $('.selectpicker').selectpicker();
}

/* tables-classic.init.js */
function tablesClassicInit() {
    (function($) {
        /* Table select / checkboxes utility */
        $('.checkboxs thead :checkbox').change(function(){
            if ($(this).is(':checked'))
            {
                $('.checkboxs tbody :checkbox').prop('checked', true).trigger('change').parent().addClass('checked');
                $('.checkboxs tbody tr.selectable').addClass('selected');
                $('.checkboxs_actions').removeClass('hide').show();
            }
            else
            {
                $('.checkboxs tbody :checkbox').prop('checked', false).trigger('change').parent().removeClass('checked');
                $('.checkboxs tbody tr.selectable').removeClass('selected');
                $('.checkboxs_actions').hide();
            }
        });

        $('.checkboxs tbody tr').addClass('selectable');
        $('.checkboxs tbody :checked').each(function(){
            $(this).parent('tr').addClass('selected');
        });

        $('.checkboxs tbody').on('click', 'tr.selectable', function(e){
            var c = $(this).find(':checkbox');
            var s = $(e.srcElement);

            if (e.srcElement.nodeName == 'INPUT')
            {
                if (c.is(':checked'))
                    $(this).addClass('selected');
                else
                    $(this).removeClass('selected');
            }
            else if (e.srcElement.nodeName != 'TD' && e.srcElement.nodeName != 'TR' && e.srcElement.nodeName != 'DIV')
            {
                return true;
            }
            else
            {
                if (c.is(':checked'))
                {
                    c.prop('checked', false).trigger('change').parent().removeClass('checked');
                    $(this).removeClass('selected');
                }
                else
                {
                    c.prop('checked', true).trigger('change').parent().addClass('checked');
                    $(this).addClass('selected');
                }
            }
            if ($('.checkboxs tr.selectable :checked').length == $('.checkboxs tr.selectable :checkbox').length)
                $('.checkboxs thead :checkbox').prop('checked', true).parent().addClass('checked');
            else
                $('.checkboxs thead :checkbox').prop('checked', false).parent().removeClass('checked');

            if ($('.checkboxs tr.selectable :checked').length >= 1)
                $('.checkboxs_actions').removeClass('hide').show();
            else
                $('.checkboxs_actions').hide();
        });

        if ($('.checkboxs tbody :checked').length == $('.checkboxs tbody :checkbox').length && $('.checkboxs tbody :checked').length)
            $('.checkboxs thead :checkbox').prop('checked', true).parent().addClass('checked');

        if ($('.checkboxs tbody :checked').length)
            $('.checkboxs_actions').removeClass('hide').show();

        $('.radioboxs tbody tr.selectable').click(function(e){
            var c = $(this).find(':radio');
            if (e.srcElement.nodeName == 'INPUT')
            {
                if (c.is(':checked'))
                    $(this).addClass('selected');
                else
                    $(this).removeClass('selected');
            }
            else if (e.srcElement.nodeName != 'TD' && e.srcElement.nodeName != 'TR')
            {
                return true;
            }
            else
            {
                if (c.is(':checked'))
                {
                    c.attr('checked', false);
                    $(this).removeClass('selected');
                }
                else
                {
                    c.attr('checked', true);
                    $('.radioboxs tbody tr.selectable').removeClass('selected');
                    $(this).addClass('selected');
                }
            }
        });

        // sortable tables
        if ($( ".js-table-sortable" ).length) {
            $( ".js-table-sortable" ).sortable(
                {
                    placeholder: "ui-state-highlight",
                    items: "tbody tr",
                    handle: ".js-sortable-handle",
                    forcePlaceholderSize: true,
                    helper: function(e, ui)
                    {
                        ui.children().each(function() {
                            $(this).width($(this).width());
                        });
                        return ui;
                    },
                    start: function(event, ui)
                    {
                        ui.placeholder.html('<td colspan="' + $(this).find('tbody tr:first td').length + '">&nbsp;</td>');
                    }
                });
        }
    })(jQuery);
}

/* ui.init.js */
function uiInit() {
    // Popover
    $('[data-toggle="popover"]').popover();
}

/* notify.init.js */
function notyfyInit() {
    $('[data-toggle="notyfy"]').click(function ()
    {
        var self = $(this);
        if(self.data('layout') == 'inline')
        {
            $(self.data('custom')).notyfy(
                {
                    text: text[self.data('type')],
                    type: self.data('type'),
                    dismissQueue: true,
                    buttons: (self.data('type') != 'confirm') ? false : [{
                            addClass: 'btn btn-success btn-small glyphicons btn-icon ok_2',
                            text: '<i></i> Ok',
                            onClick: function ($notyfy) {
                                $notyfy.close();
                                $(self.data('custom')).notyfy({
                                    force: true,
                                    text: 'You clicked "<strong>Ok</strong>" button.',
                                    type: 'success'
                                });
                            }
                        }, {
                            addClass: 'btn btn-danger btn-small glyphicons btn-icon remove_2',
                            text: 'Cancel',
                            onClick: function ($notyfy) {
                                $notyfy.close();
                                $(self.data('custom')).notyfy({
                                    force: true,
                                    text: 'You clicked "Cancel" button',
                                    type: 'error'
                                });
                            }
                        }]
                });
            return false;
        }

        notyfy({
            text: notification[self.data('type')],
            type: self.data('type'),
            dismissQueue: true,
            layout: self.data('layout'),
            buttons: (self.data('type') != 'confirm') ? false : [{
                    addClass: 'btn btn-success btn-small btn-icon glyphicons ok_2',
                    text: '<i></i> Ok',
                    onClick: function ($notyfy) {
                        $notyfy.close();
                        notyfy({
                            force: true,
                            text: 'You clicked "<strong>Ok</strong>" button',
                            type: 'success',
                            layout: self.data('layout')
                        });
                    }
                }, {
                    addClass: 'btn btn-danger btn-small btn-icon glyphicons remove_2',
                    text: '<i></i> Cancel',
                    onClick: function ($notyfy) {
                        $notyfy.close();
                        notyfy({
                            force: true,
                            text: '<strong>You clicked "Cancel" button<strong>',
                            type: 'error',
                            layout: self.data('layout')
                        });
                    }
                }]
        });
        return false;
    });

    var notification = [];

    notification['alert'] = 'Best check yo self, you\'<strong>re not looking too good</strong>.';
    notification['primary'] = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.";
    notification['error'] = '<strong>Change a few things up and try submitting again.</strong> This Error message.';
    notification['success'] = 'You <strong>successfully</strong> read this important alert message.';
    notification['information'] = 'This alert needs your attention, but it\'s not super <strong>important</strong>.';
    notification['warning'] = '<strong>Warning!</strong> Best check yo self, you\'re not looking too good.';
    notification['confirm'] = 'Do you want to continue?';


}

/* gritter.init.js */
function gritterInit() {
    $('.gritter-add-sticky').click(function()
    {
        var unique_id = $.gritter.add({
            // (string | mandatory) the heading of the notification
            title: 'This is a sticky notice!',
            // (string | mandatory) the text inside the notification
            text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#">magnis dis parturient</a> montes, nascetur ridiculus mus.',
            // (string | optional) the image to display on the left
            //image: 'https://si0.twimg.com/profile_images/2873657673/f56ad0e8a62b588ad92b19969084b2ab_bigger.png',
            // (bool | optional) if you want it to fade out on its own or just sit there
            sticky: true,
            // (int | optional) the time you want it to be alive for before fading out
            time: '',
            // (string | optional) the class name you want to apply to that specific message
            class_name: 'my-sticky-class'
        });

        // You can have it return a unique id, this can be used to manually remove it later using
        /*
         setTimeout(function(){

         $.gritter.remove(unique_id, {
         fade: true,
         speed: 'slow'
         });

         }, 6000)
         */
        return false;
    });

    $('.gritter-add-regular').click(function()
    {
        $.gritter.add({
            // (string | mandatory) the heading of the notification
            title: 'This is a regular notice!',
            // (string | mandatory) the text inside the notification
            text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#">magnis dis parturient</a> montes, nascetur ridiculus mus.',
            // (string | optional) the image to display on the left
            //image: 'https://si0.twimg.com/profile_images/2873657673/f56ad0e8a62b588ad92b19969084b2ab_bigger.png',
            // (bool | optional) if you want it to fade out on its own or just sit there
            sticky: false,
            // (int | optional) the time you want it to be alive for before fading out
            time: ''
        });

        return false;

    });

    $('.gritter-add-primary').click(function()
    {
        $.gritter.add({
            // (string | mandatory) the heading of the notification
            title: 'This is a primary notice!',
            // (string | mandatory) the text inside the notification
            text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#">magnis dis parturient</a> montes, nascetur ridiculus mus.',
            // (string | optional) the image to display on the left
            //image: 'https://si0.twimg.com/profile_images/2873657673/f56ad0e8a62b588ad92b19969084b2ab_bigger.png',
            // (bool | optional) if you want it to fade out on its own or just sit there
            sticky: false,
            // (int | optional) the time you want it to be alive for before fading out
            time: '',
            // (string | optional) the class name you want to apply to that specific message
            class_name: 'gritter-primary'
        });

        return false;

    });

    $('.gritter-add-max').click(function()
    {
        $.gritter.add({
            // (string | mandatory) the heading of the notification
            title: 'This is a notice with a max of 3 on screen at one time!',
            // (string | mandatory) the text inside the notification
            text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#">magnis dis parturient</a> montes, nascetur ridiculus mus.',
            // (string | optional) the image to display on the left
            //image: 'https://si0.twimg.com/profile_images/2873657673/f56ad0e8a62b588ad92b19969084b2ab_bigger.png',
            // (bool | optional) if you want it to fade out on its own or just sit there
            sticky: false,
            // (function) before the gritter notice is opened
            before_open: function(){
                if($('.gritter-item-wrapper').length == 3)
                {
                    // Returning false prevents a new gritter from opening
                    return false;
                }
            }
        });
        return false;
    });

    $('.gritter-add-without-image').click(function()
    {
        $.gritter.add({
            // (string | mandatory) the heading of the notification
            title: 'This is a notice without an image!',
            // (string | mandatory) the text inside the notification
            text: 'This will fade out after a certain amount of time. Vivamus eget tincidunt velit. Cum sociis natoque penatibus et <a href="#">magnis dis parturient</a> montes, nascetur ridiculus mus.'
        });
        return false;
    });

    $('.gritter-add-white').click(function()
    {
        $.gritter.add({
            // (string | mandatory) the heading of the notification
            title: 'This is a light notification',
            // (string | mandatory) the text inside the notification
            text: 'Just add a "gritter-light" class_name to your $.gritter.add or globally to $.gritter.options.class_name',
            class_name: 'gritter-light'
        });
        return false;
    });




}

/* modals.bootbox.init.js */
function modalsBootBoxInit() {
    $('#modals-bootbox-alert').click(function()
    {
        bootbox.alert("Hello World!", function(result)
        {
            $.gritter.add({
                title: 'Callback!',
                text: "I'm just a BootBox Alert callback!"
            });
        });
    });
    $('#modals-bootbox-confirm').click(function()
    {
        bootbox.confirm("Are you sure?", function(result)
        {
            $.gritter.add({
                title: 'Callback!',
                text: "BootBox Confirm Callback with result: "+ result
            });
        });
    });
    $('#modals-bootbox-prompt').click(function()
    {
        bootbox.prompt("What is your name?", function(result)
        {
            if (result === null) {
                $.gritter.add({
                    title: 'Callback!',
                    text: "BootBox Prompt Dismissed!"
                });
            } else {
                $.gritter.add({
                    title: 'Hi ' + result,
                    text: "BootBox Prompt Callback with result: "+ result
                });
            }
        });
    });
    $('#modals-bootbox-custom').click(function()
    {
        bootbox.dialog({
            message: "I am a custom dialog",
            title: "Custom title",
            buttons: {
                success: {
                    label: "Success!",
                    className: "btn-success",
                    callback: function() {
                        $.gritter.add({
                            title: 'Callback!',
                            text: "Great success"
                        });
                    }
                },
                danger: {
                    label: "Danger!",
                    className: "btn-danger",
                    callback: function() {
                        $.gritter.add({
                            title: 'Callback!',
                            text: "Uh oh, look out!"
                        });
                    }
                },
                main: {
                    label: "Click ME!",
                    className: "btn-primary",
                    callback: function() {
                        $.gritter.add({
                            title: 'Callback!',
                            text: "Primary button!"
                        });
                    }
                }
            }
        });
    });
}

/* wysihtml5.init.js */
function wysiHTML5() {
    (function($) {
        var $textarea = $("textarea.wysihtml5");

            /* wysihtml5 */
            if ( $textarea.length > 0 )
                $textarea.wysihtml5();
                $textarea.css("display", "block");
    })(jQuery);
}

/* form-wizards.init.js */
function formWizardsInit() {
    $(function()
    {
        var bWizardTabClass = '';
        $('.wizard.wizard-design').each(function()
        {
            if ($(this).is('#rootwizard'))
                bWizardTabClass = 'bwizard-steps';
            else
                bWizardTabClass = '';

            var wiz = $(this);

            $(this).bootstrapWizard(
                {
                    onNext: function(tab, navigation, index)
                    {
                        if(index==1)
                        {
                            // Make sure we entered the title
                            if(!wiz.find('#inputTitle').val()) {
                                alert('You must enter the product title');
                                wiz.find('#inputTitle').focus();
                                return false;
                            }
                        }
                    },
                    onLast: function(tab, navigation, index)
                    {
                        // Make sure we entered the title
                        if(!wiz.find('#inputTitle').val()) {
                            alert('You must enter the product title');
                            wiz.find('#inputTitle').focus();
                            return false;
                        }
                    },
                    onTabClick: function(tab, navigation, index)
                    {
                        // Make sure we entered the title
                        if(!wiz.find('#inputTitle').val()) {
                            alert('You must enter the product title');
                            wiz.find('#inputTitle').focus();
                            return false;
                        }
                    },
                    onTabShow: function(tab, navigation, index)
                    {
                        var $total = navigation.find('li:not(.status)').length;
                        var $current = index+1;
                        var $percent = ($current/$total) * 100;

                        if (wiz.find('.progress-bar').length)
                        {
                            wiz.find('.progress-bar').css({width:$percent+'%'});
                            wiz.find('.progress-bar')
                                .find('.step-current').html($current)
                                .parent().find('.steps-total').html($total)
                                .parent().find('.steps-percent').html(Math.round($percent) + "%");
                        }

                        // update status
                        if (wiz.find('.step-current').length) wiz.find('.step-current').html($current);
                        if (wiz.find('.steps-total').length) wiz.find('.steps-total').html($total);
                        if (wiz.find('.steps-complete').length) wiz.find('.steps-complete').html(($current-1));

                        // mark all previous tabs as complete
                        navigation.find('li:not(.status)').removeClass('primary');
                        navigation.find('li:not(.status):lt('+($current-1)+')').addClass('primary');

                        // If it's the last tab then hide the last button and show the finish instead
                        if($current >= $total) {
                            wiz.find('.pagination .next').hide();
                            wiz.find('.pagination .finish').show();
                            wiz.find('.pagination .finish').removeClass('disabled');
                        } else {
                            wiz.find('.pagination .next').show();
                            wiz.find('.pagination .finish').hide();
                        }
                    },
                    tabClass: bWizardTabClass,
                    nextSelector: '.next',
                    previousSelector: '.previous',
                    firstSelector: '.first',
                    lastSelector: '.last'
                });

            wiz.find('.finish').click(function()
            {
                alert('Finished!, Starting over!');
                wiz.find("a[data-toggle*='tab']:first").trigger('click');
            });
        });
    });
}

/* widget-collapsible.init.js */
function widgetCollapsibleInit() {
    (function($)
    {
        $('.widget[data-toggle="collapse-widget"] .widget-body')
            .on('show.bs.collapse', function(){
                $(this).parents('.widget:first').attr('data-collapse-closed', "false");
            })
            .on('shown.bs.collapse', function(){
                setTimeout(function(){ $(window).resize(); }, 500);
            })
            .on('hidden.bs.collapse', function(){
                $(this).parents('.widget:first').attr('data-collapse-closed', "true");
            });

        $('.widget[data-toggle="collapse-widget"]').each(function()
        {
            // append toggle button
            if (!$(this).find('.widget-head > .collapse-toggle').length)
                $('<span class="collapse-toggle"></span>').appendTo($(this).find('.widget-head'));

            // make the widget body collapsible
            $(this).find('.widget-body').not('.collapse').addClass('collapse');

            // verify if the widget should be opened
            if ($(this).attr('data-collapse-closed') !== "true")
                $(this).find('.widget-body').addClass('in');

            // bind the toggle button
            $(this).find('.collapse-toggle').on('click', function(){
                $(this).parents('.widget:first').find('.widget-body').collapse('toggle');
            });
        });
    })(jQuery);
}

/* widget-progress.init.js */
function widgetProgressInit() {
    (function($)
    {
        $('#widget-progress-bar .progress-bar').width("50%");
        setInterval(function(){
            var w = mt_rand(30, 100);
            $('#widget-progress-bar .steps-percent').html(w + "%");
            $('#widget-progress-bar .progress-bar').width(w + "%");
        }, 2000);
    })(jQuery);
}

/* range-sliders-init.js */
function rangeSlidersInit() {
    $(function()
    {
        /* jQRangeSliders */

        // regular Range Slider
        $("#rangeSlider").rangeSlider();

        // edit Range Slider
        $("#rangeSliderEdit").editRangeSlider();

        // date Range Slider
        $("#rangeSliderDate").dateRangeSlider();

        // Range Slider without Arrows
        $("#rangeSliderWArrows").rangeSlider({ arrows: false });

        // Range Slider Formatter
        $("#rangeSliderFormatter").rangeSlider({
            formatter:function(val){
                var value = Math.round(val * 5) / 5,
                    decimal = value - Math.round(val);
                return "$" + (decimal == 0 ? value.toString() + ".0" : value.toString());
            }
        });


        // regular Range Slider
        $("#rangeSlider").rangeSlider();

        // edit Range Slider
        $("#rangeSliderEdit").editRangeSlider();

        // date Range Slider
        $("#rangeSliderDate").dateRangeSlider();

        // Range Slider without Arrows
        $("#rangeSliderWArrows").rangeSlider({ arrows: false });

        // Range Slider Formatter
        $("#rangeSliderFormatter").rangeSlider({
            formatter:function(val){
                var value = Math.round(val * 5) / 5,
                    decimal = value - Math.round(val);
                return "$" + (decimal == 0 ? value.toString() + ".0" : value.toString());
            }
        });

        // Range Slider Ruler
        $("#rangeSliderRuler").rangeSlider({
            scales: [
                // Primary scale
                {
                    first: function(val){ return val; },
                    next: function(val){ return val + 10; },
                    stop: function(val){ return false; },
                    label: function(val){ return val; },
                    format: function(tickContainer, tickStart, tickEnd){
                        tickContainer.addClass("myCustomClass");
                    }
                },
                // Secondary scale
                {
                    first: function(val){ return val; },
                    next: function(val){
                        if (val % 10 === 9){
                            return val + 2;
                        }
                        return val + 1;
                    },
                    stop: function(val){ return false; },
                    label: function(){ return null; }
                }]
        });

        // Date Range Slider Ruler
        var months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];
        $("#rangeSliderRulerDate").dateRangeSlider(
            {
                bounds: {min: new Date(2012, 0, 1), max: new Date(2012, 11, 31, 12, 59, 59)},
                defaultValues: {min: new Date(2012, 1, 10), max: new Date(2012, 4, 22)},
                scales: [{
                    first: function(value){ return value; },
                    end: function(value) {return value; },
                    next: function(value){
                        var next = new Date(value);
                        return new Date(next.setMonth(value.getMonth() + 1));
                    },
                    label: function(value){
                        return months[value.getMonth()];
                    },
                    format: function(tickContainer, tickStart, tickEnd){
                        tickContainer.addClass("myCustomClass");
                    }
                }]
            });

        // Range Slider Step
        $("#rangeSliderStep").rangeSlider({step: 10});

        // Range Slider Wheel Zoom
        $("#rangeSliderWheelZoom").rangeSlider({wheelMode: "zoom"});

        // Range Slider Wheel Scroll
        $("#rangeSliderWheelScroll").rangeSlider({wheelMode: "scroll", wheelSpeed: 30});

    });
}

/* jqueryui-sliders.init.js */
function jqueryUiSlidersInit() {
    /*
     * Helper function for JQueryUI Sliders Create event
     */
    function JQSliderCreate()
    {
        $(this)
            .removeClass('ui-corner-all ui-widget-content')
            .wrap('<span class="ui-slider-wrap"></span>')
            .find('.ui-slider-handle')
            .removeClass('ui-corner-all ui-state-default');
    }

    $(function()
    {

        /*
         * JQueryUI Slider: Default slider
         */
        if ($('.slider-single').length > 0)
        {
            $( ".slider-single" ).slider({
                create: JQSliderCreate,
                value: 10,
                animate: true,
                start: function() { if (typeof mainYScroller != 'undefined') mainYScroller.disable(); },
                stop: function() { if (typeof mainYScroller != 'undefined') mainYScroller.enable(); }
            });
        }

        /*
         * JQueryUI Slider: Multiple Vertical Sliders
         */
        $( ".sliders-vertical > span" ).each(function()
        {
            var value = parseInt( $( this ).text(), 10 );
            $( this ).empty().slider({
                create: JQSliderCreate,
                value: value,
                range: "min",
                animate: true,
                orientation: "vertical",
                start: function() { if (typeof mainYScroller != 'undefined') mainYScroller.disable(); },
                stop: function() { if (typeof mainYScroller != 'undefined') mainYScroller.enable(); }
            });
        });

        /*
         * JQueryUI Slider: Range Slider
         */
        if ($('.range-slider').length > 0)
        {
            $( ".range-slider .slider" ).each(function()
            {
                var t = $(this).parent(),
                    i = t.find('input'),
                    min = $(this).data('min') || 0,
                    max = $(this).data('max') || 500,
                    values = $(this).data('values') ? $(this).data('values').split(',') : [i.first().val(), i.last().val() || max];

                $(this).slider({
                    create: JQSliderCreate,
                    range: true,
                    min: min,
                    max: max,
                    values: values,
                    slide: function( event, ui ) {
                        if (i.length == 1)
                            t.find(".amount").val( ui.values[ 0 ] + " - " + ui.values[ 1 ] );
                        else
                            i.each(function(k,v){ $(i[k]).val(ui.values[k]); });
                    }
                });

                if (i.length == 1)
                    t.find(".amount").val( $(this).slider( "values", 0 ) +
                        " - " + $(this).slider( "values", 1 ) );
            });
        }

        /*
         * JQueryUI Slider: Snap to Increments
         */
        if ($('.increments-slider').length > 0)
        {
            $( ".increments-slider .slider" ).slider({
                create: JQSliderCreate,
                value:100,
                min: 0,
                max: 500,
                step: 50,
                slide: function( event, ui ) {
                    $( ".increments-slider .amount" ).val( "$" + ui.value );
                },
                start: function() { if (typeof mainYScroller != 'undefined') mainYScroller.disable(); },
                stop: function() { if (typeof mainYScroller != 'undefined') mainYScroller.enable(); }
            });
            $( ".increments-slider .amount" ).val( "$" + $( ".increments-slider .slider" ).slider( "value" ) );
        }

        /*
         * JQueryUI Slider: Vertical Range Slider
         */
        if ($('.vertical-range-slider').length > 0)
        {
            $( ".vertical-range-slider .slider" ).slider({
                create: JQSliderCreate,
                orientation: "vertical",
                range: true,
                min: 0,
                max: 500,
                values: [ 100, 400 ],
                slide: function( event, ui ) {
                    $( ".vertical-range-slider .amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
                },
                start: function() { if (typeof mainYScroller != 'undefined') mainYScroller.disable(); },
                stop: function() { if (typeof mainYScroller != 'undefined') mainYScroller.enable(); }
            });
            $( ".vertical-range-slider .amount" ).val( "$" + $( ".vertical-range-slider .slider" ).slider( "values", 0 ) +
                " - $" + $( ".vertical-range-slider .slider" ).slider( "values", 1 ) );
        }

        /*
         * JQueryUI Slider: Range fixed minimum
         */
        if ($('.slider-range-min').length > 0)
        {
            $( ".slider-range-min .slider" ).slider({
                create: JQSliderCreate,
                range: "min",
                value: 150,
                min: 1,
                max: 700,
                slide: function( event, ui ) {
                    $( ".slider-range-min .amount" ).val( "$" + ui.value );
                },
                start: function() { if (typeof mainYScroller != 'undefined') mainYScroller.disable(); },
                stop: function() { if (typeof mainYScroller != 'undefined') mainYScroller.enable(); }
            });
            $( ".slider-range-min .amount" ).val( "$" + $( ".slider-range-min .slider" ).slider( "value" ) );
        }

        /*
         * JQueryUI Slider: Range fixed maximum
         */
        if ($('.slider-range-max').length > 0)
        {
            $( ".slider-range-max .slider" ).slider({
                create: JQSliderCreate,
                range: "max",
                min: 1,
                max: 700,
                value: 150,
                slide: function( event, ui ) {
                    $( ".slider-range-max .amount" ).val( "$" + ui.value );
                },
                start: function() { if (typeof mainYScroller != 'undefined') mainYScroller.disable(); },
                stop: function() { if (typeof mainYScroller != 'undefined') mainYScroller.enable(); }
            });
            $( ".slider-range-max .amount" ).val( "$" + $( ".slider-range-max .slider" ).slider( "value" ) );
        }
    });
}

/* flotchart-simple-01.init.js */
function flotchartSimpleInit() {

    $(function() {
        if($("#chart_simple_001").length) {
            if (typeof charts == 'undefined')
                return;

            charts.chart_simple_001 =
                {
                    // data
                    data:
                        {
                            d1: [],
                            d2: []
                        },

                    // will hold the chart object
                    plot: null,

                    // chart options
                    options:
                        {
                            grid:
                                {
                                    color: "#dedede",
                                    borderWidth: 1,
                                    borderColor: "transparent",
                                    clickable: true,
                                    hoverable: true
                                },
                            series: {
                                lines: {
                                    show: true,
                                    fill: false,
                                    lineWidth: 2,
                                    steps: false
                                },
                                points: {
                                    show:true,
                                    radius: 5,
                                    lineWidth: 3,
                                    fill: true,
                                    fillColor: "#000"
                                }
                            },
                            xaxis: {
                                tickColor: 'transparent',
                                tickDecimals: 2,
                                tickSize: 2
                            },
                            yaxis: {
                                tickSize: 1000
                            },
                            legend: { position: "nw", noColumns: 2, backgroundColor: null, backgroundOpacity: 0 },
                            shadowSize: 0,
                            tooltip: true,
                            tooltipOpts: {
                                content: "%s : %y.3",
                                shifts: {
                                    x: -30,
                                    y: -50
                                },
                                defaultTheme: false
                            }
                        },

                    placeholder: "#chart_simple_001",

                    // initialize
                    init: function()
                    {
                        // this.options.colors = ["#72af46", "#466baf"];
                        this.options.colors = [successColor, primaryColor];
                        this.options.grid.backgroundColor = { colors: ["#fff", "#fff"]};

                        var that = this;

                        if (this.plot == null)
                        {
                            this.data.d1 = [ [6, 1300], [7, 1600], [8, 1900], [9, 2100], [10, 2500], [11, 2200], [12, 2000], [13, 1950], [14, 1900], [15, 2000] ];
                            this.data.d2 = [ [6, 500], [7, 600], [8, 550], [9, 600], [10, 800], [11, 900], [12, 800], [13, 850], [14, 830], [15, 1000] ];
                        }
                        this.plot = $.plot(
                            $(this.placeholder),
                            [{
                                label: "Data 1",
                                data: this.data.d1,
                                lines: { fill: 0.05 },
                                points: { fillColor: "#fff" }
                            },
                                {
                                    label: "Data 2",
                                    data: this.data.d2,
                                    lines: { fill: 0.1 },
                                    points: { fillColor: that.options.colors[1] }
                                }], this.options);
                    }
                };

            // uncomment to init on load
            charts.chart_simple_001.init();
        }


        // use with tabs
        /*        $('a[href="#chart-simple-lines-001"]').on('shown.bs.tab', function(){
         if (charts.chart_simple_001.plot == null)
         charts.chart_simple_001.init();
         });

         $('.btn-group [data-toggle="tab"]').on('show.bs.tab', function(){
         $(this).parent().find('[data-toggle]').removeClass('active');
         $(this).addClass('active');
         });*/

        // use with tabs
        $('a[href="#chart-simple-lines-001"]').on('shown.bs.tab', function(){
            if (charts.chart_simple_001.plot == null)
                charts.chart_simple_001.init();
        });

        $('body').on('click', '.btn-group a[href="#chart-simple-lines-001"]', function(){
            $(this).parent().find('[data-toggle]').removeClass('active');
            $(this).addClass('active');
        });
    });
}

/* flotchart-simple-bars.init.js */
function flotchartSimpleBarsInit() {

    (function($)
    {
        if($("#chart_simple_bars_001").length) {
            if (typeof charts == 'undefined')
                return;

            charts.chart_simple_bars_001 =
                {
                    // data
                    data:
                        {
                            d1: [],
                            d2: []
                        },

                    // will hold the chart object
                    plot: null,

                    // chart options
                    options:
                        {
                            grid:
                                {
                                    color: "#dedede",
                                    borderWidth: 1,
                                    borderColor: "transparent",
                                    clickable: true,
                                    hoverable: true
                                },
                            series: {
                                bars: {
                                    show: true,
                                    barWidth: .65,
                                    fill: 1,
                                    align: 'center'
                                },
                                shadowSize: 0
                            },
                            xaxis: {
                                tickColor: 'transparent',
                                tickDecimals: 2,
                                tickSize: 2
                            },
                            yaxis: {
                                tickSize: 1000
                            },
                            legend: { position: "nw", noColumns: 2, backgroundColor: null, backgroundOpacity: 0 },
                            shadowSize: 0,
                            tooltip: true,
                            tooltipOpts: {
                                content: "%s : %y.3",
                                shifts: {
                                    x: -30,
                                    y: -50
                                },
                                defaultTheme: false
                            }
                        },

                    placeholder: "#chart_simple_bars_001",

                    // initialize
                    init: function()
                    {
                        this.options.colors = [successColor, primaryColor];
                        this.options.grid.backgroundColor = { colors: ["#fff", "#fff"]};

                        if (this.plot == null)
                        {
                            this.data.d1 = [ [6, 1300], [7, 1600], [8, 1900], [9, 2100], [10, 2500], [11, 2200], [12, 2000], [13, 1950], [14, 1900], [15, 2000] ];
                            this.data.d2 = [ [6, 500], [7, 600], [8, 550], [9, 600], [10, 800], [11, 900], [12, 800], [13, 850], [14, 830], [15, 1000] ];
                        }
                        this.plot = $.plot(
                            $(this.placeholder),
                            [{
                                label: "Data 1",
                                data: this.data.d1,
                                // bars: { lineWidth: 0 }
                            },
                                {
                                    label: "Data 2",
                                    data: this.data.d2,
                                    // bars: { lineWidth: 0 }
                                }], this.options);
                    }
                };


            // uncomment to init on load
            charts.chart_simple_bars.init();

            // use with tabs
            /*          $('a[href="#chart-simple-bars-001"]').on('shown.bs.tab', function(){
             if (charts.chart_simple_bars_001.plot == null)
             charts.chart_simple_bars_001.init();
             });

             $('.btn-group [data-toggle="tab"]').on('show.bs.tab', function(){
             $(this).parent().find('[data-toggle]').removeClass('active');
             $(this).addClass('active');
             });*/

            // use with tabs
            $('a[href="#chart-simple-bars-001"]').on('shown.bs.tab', function(){
                if (charts.chart_simple_bars_001.plot == null)
                    charts.chart_simple_bars_001.init();
            });

            $('body').on('click', '.btn-group a[href="#chart-simple-bars-001"]', function(){
                $(this).parent().find('[data-toggle]').removeClass('active');
                $(this).addClass('active');
            });
        }


    })(jQuery);
}

/* flotchart-simple-02.init.js */
function flotchartSimple02Init() {
    (function($)
    {
        if($("#chart_simple_02").length) {
            if (typeof charts == 'undefined')
                return;

            charts.chart_simple =
                {
                    // data
                    data:
                        {
                            d1: [],
                            d2: []
                        },

                    // will hold the chart object
                    plot: null,

                    // chart options
                    options:
                        {
                            grid:
                                {
                                    color: "#dedede",
                                    borderWidth: 1,
                                    borderColor: "transparent",
                                    clickable: true,
                                    hoverable: true
                                },
                            series: {
                                lines: {
                                    show: true,
                                    fill: false,
                                    lineWidth: 2,
                                    steps: false
                                },
                                points: {
                                    show:true,
                                    radius: 5,
                                    lineWidth: 3,
                                    fill: true,
                                    fillColor: "#000"
                                }
                            },
                            xaxis: {
                                tickColor: 'transparent',
                                tickDecimals: 2,
                                tickSize: 2
                            },
                            yaxis: {
                                tickSize: 1000
                            },
                            legend: { position: "nw", noColumns: 2, backgroundColor: null, backgroundOpacity: 0 },
                            shadowSize: 0,
                            tooltip: true,
                            tooltipOpts: {
                                content: "%s : %y.3",
                                shifts: {
                                    x: -30,
                                    y: -50
                                },
                                defaultTheme: false
                            }
                        },

                    placeholder: "#chart_simple_02",

                    // initialize
                    init: function()
                    {
                        // this.options.colors = ["#72af46", "#466baf"];
                        this.options.colors = [successColor, primaryColor];
                        this.options.grid.backgroundColor = { colors: ["#fff", "#fff"]};

                        var that = this;

                        if (this.plot == null)
                        {
                            this.data.d1 = [ [6, 1300], [7, 1600], [8, 1900], [9, 2100], [10, 2500], [11, 2200], [12, 2000], [13, 1950], [14, 1900], [15, 2000] ];
                            this.data.d2 = [ [6, 500], [7, 600], [8, 550], [9, 600], [10, 800], [11, 900], [12, 800], [13, 850], [14, 830], [15, 1000] ];
                        }
                        this.plot = $.plot(
                            $(this.placeholder),
                            [{
                                label: "Data 1",
                                data: this.data.d1,
                                lines: { fill: 0.05 },
                                points: { fillColor: "#fff" }
                            },
                                {
                                    label: "Data 2",
                                    data: this.data.d2,
                                    lines: { fill: 0.1 },
                                    points: { fillColor: that.options.colors[1] }
                                }], this.options);
                    }
                };

            // uncomment to init on load
            charts.chart_simple.init();

            // use with tabs
            // $('a[href="#chart-simple-lines"]').on('shown.bs.tab', function(){
            //  if (charts.chart_simple.plot == null)
            //      charts.chart_simple.init();
            // });

            // $('.btn-group [data-toggle="tab"]').on('show.bs.tab', function(){
            //  $(this).parent().find('[data-toggle]').removeClass('active');
            //  $(this).addClass('active');
            // });
        }


    })(jQuery);

}

/* flotchart-line.init.js */
function flotChartLineInit() {
    (function($)
    {
        if($("#chart_lines_fill_nopoints").length) {
            if (typeof charts == 'undefined')
                return;

            charts.chart_lines_fill_nopoints =
                {
                    // chart data
                    data:
                        {
                            d1: [],
                            d2: []
                        },

                    // will hold the chart object
                    plot: null,

                    // chart options
                    options:
                        {
                            grid:
                                {
                                    color: "#dedede",
                                    borderWidth: 1,
                                    borderColor: "transparent",
                                    clickable: true,
                                    hoverable: true
                                },
                            series: {
                                grow: {active:false},
                                lines: {
                                    show: true,
                                    fill: true,
                                    lineWidth: 2,
                                    steps: false
                                },
                                points: {show:false}
                            },
                            legend: { position: "nw", backgroundColor: null, backgroundOpacity: 0, noColumns: 2 },
                            yaxis: { tickSize:25 },
                            xaxis: { tickColor: 'transparent', tickSize:5, tickDecimals: 0},
                            colors: [],
                            shadowSize:1,
                            tooltip: true,
                            tooltipOpts: {
                                content: "%s : %y.0",
                                shifts: {
                                    x: -30,
                                    y: -50
                                },
                                defaultTheme: false
                            }
                        },

                    placeholder: "#chart_lines_fill_nopoints",

                    // initialize
                    init: function()
                    {
                        // apply styling
                        charts.utility.applyStyle(this);

                        // generate some data
                        this.data.d1 = [[1, 3+charts.utility.randNum()], [2, 6+charts.utility.randNum()], [3, 9+charts.utility.randNum()], [4, 12+charts.utility.randNum()],[5, 15+charts.utility.randNum()],[6, 18+charts.utility.randNum()],[7, 21+charts.utility.randNum()],[8, 15+charts.utility.randNum()],[9, 18+charts.utility.randNum()],[10, 21+charts.utility.randNum()],[11, 24+charts.utility.randNum()],[12, 27+charts.utility.randNum()],[13, 30+charts.utility.randNum()],[14, 33+charts.utility.randNum()],[15, 24+charts.utility.randNum()],[16, 27+charts.utility.randNum()],[17, 30+charts.utility.randNum()],[18, 33+charts.utility.randNum()],[19, 36+charts.utility.randNum()],[20, 39+charts.utility.randNum()],[21, 42+charts.utility.randNum()],[22, 45+charts.utility.randNum()],[23, 36+charts.utility.randNum()],[24, 39+charts.utility.randNum()],[25, 42+charts.utility.randNum()],[26, 45+charts.utility.randNum()],[27,38+charts.utility.randNum()],[28, 51+charts.utility.randNum()],[29, 55+charts.utility.randNum()], [30, 60+charts.utility.randNum()]];
                        this.data.d2 = [[1, charts.utility.randNum()-5], [2, charts.utility.randNum()-4], [3, charts.utility.randNum()-4], [4, charts.utility.randNum()],[5, 4+charts.utility.randNum()],[6, 4+charts.utility.randNum()],[7, 5+charts.utility.randNum()],[8, 5+charts.utility.randNum()],[9, 6+charts.utility.randNum()],[10, 6+charts.utility.randNum()],[11, 6+charts.utility.randNum()],[12, 2+charts.utility.randNum()],[13, 3+charts.utility.randNum()],[14, 4+charts.utility.randNum()],[15, 4+charts.utility.randNum()],[16, 4+charts.utility.randNum()],[17, 5+charts.utility.randNum()],[18, 5+charts.utility.randNum()],[19, 2+charts.utility.randNum()],[20, 2+charts.utility.randNum()],[21, 3+charts.utility.randNum()],[22, 3+charts.utility.randNum()],[23, 3+charts.utility.randNum()],[24, 2+charts.utility.randNum()],[25, 4+charts.utility.randNum()],[26, 4+charts.utility.randNum()],[27,5+charts.utility.randNum()],[28, 2+charts.utility.randNum()],[29, 2+charts.utility.randNum()], [30, 3+charts.utility.randNum()]];

                        // make chart
                        this.plot = $.plot(
                            this.placeholder,
                            [{
                                label: "Visits",
                                data: this.data.d1,
                                lines: {fillColor: "rgba(0,0,0,0.01)"},
                                points: {fillColor: "#88bbc8"}
                            },
                                {
                                    label: "Unique Visits",
                                    data: this.data.d2,
                                    lines: {fill: 0.05},
                                    points: {fillColor: "#ed7a53"}
                                }],
                            this.options);
                    }
                };

            charts.chart_lines_fill_nopoints.init();
        }

    })(jQuery);
}

/* flotchart-bars-ordered.init.js */
function flotchartBarsOrderedInit() {

    (function($)
    {
        if($("#chart_ordered_bars").length) {
            if (typeof charts == 'undefined')
                return;

            charts.chart_ordered_bars =
                {
                    // chart data
                    data: null,

                    // will hold the chart object
                    plot: null,

                    // chart options
                    options:
                        {
                            bars: {
                                show:true,
                                barWidth: 0.2,
                                fill:1
                            },
                            grid:
                                {
                                    color: "#dedede",
                                    borderWidth: 1,
                                    borderColor: "transparent",
                                    clickable: true,
                                    hoverable: true
                                },
                            series: {
                                grow: {active:false}
                            },
                            yaxis: { tickSize: 10 },
                            legend: { position: "ne", backgroundColor: null, backgroundOpacity: 0, noColumns: 3 },
                            colors: [],
                            tooltip: true,
                            tooltipOpts: {
                                content: "%s : %y.0",
                                shifts: {
                                    x: -30,
                                    y: -50
                                },
                                defaultTheme: false
                            }
                        },

                    placeholder: "#chart_ordered_bars",

                    // initialize
                    init: function()
                    {
                        this.options.colors = ["#cc6666", "#cca366", "#b7cc66"];
                        this.options.grid.backgroundColor = { colors: ["#fff", "#fff"]};

                        //some data
                        var d1 = [];
                        for (var i = 0; i <= 10; i += 1)
                            d1.push([i, parseInt(Math.random() * 30)]);

                        var d2 = [];
                        for (var i = 0; i <= 10; i += 1)
                            d2.push([i, parseInt(Math.random() * 30)]);

                        var d3 = [];
                        for (var i = 0; i <= 10; i += 1)
                            d3.push([i, parseInt(Math.random() * 30)]);

                        var ds = new Array();

                        ds.push({
                            label: "Data One",
                            data:d1,
                            bars: {order: 1}
                        });
                        ds.push({
                            label: "Data Two",
                            data:d2,
                            bars: {order: 2}
                        });
                        ds.push({
                            label: "Data Three",
                            data:d3,
                            bars: {order: 3}
                        });
                        this.data = ds;

                        this.plot = $.plot($(this.placeholder), this.data, this.options);
                    }
                };

            charts.chart_ordered_bars.init();
        }

    })(jQuery);
}

/* flotchart-bars-stacked.init.js */
function flotchartBarsStackedInit() {
    (function($)
    {
        if($("#chart_stacked_bars").length) {
            if (typeof charts == 'undefined')
                return;

            charts.chart_stacked_bars =
                {
                    // chart data
                    data: null,

                    // will hold the chart object
                    plot: null,

                    // chart options
                    options:
                        {
                            grid:
                                {
                                    color: "#dedede",
                                    borderWidth: 1,
                                    borderColor: "transparent",
                                    clickable: true,
                                    hoverable: true
                                },
                            series: {
                                grow: {active:false},
                                stack: 0,
                                lines: { show: false, fill: true, steps: false },
                                bars: { show: true, barWidth: 0.5, fill:1}
                            },
                            yaxis: { tickSize: 10 },
                            xaxis: { tickColor: 'transparent', tickSize:2 },
                            legend: { position: "ne", backgroundColor: null, backgroundOpacity: 0, noColumns: 3 },
                            colors: [],
                            shadowSize:1,
                            tooltip: true,
                            tooltipOpts: {
                                content: "%s : %y.0",
                                shifts: {
                                    x: -30,
                                    y: -50
                                },
                                defaultTheme: false
                            }
                        },

                    placeholder: "#chart_stacked_bars",

                    // initialize
                    init: function()
                    {
                        this.options.colors = ["#7acc66", "#66cccc", "#77b7c5"];
                        this.options.grid.backgroundColor = { colors: ["#fff", "#fff"]};

                        var d1 = [];
                        for (var i = 0; i <= 10; i += 1)
                            d1.push([i, parseInt(Math.random() * 30)]);

                        var d2 = [];
                        for (var i = 0; i <= 10; i += 1)
                            d2.push([i, parseInt(Math.random() * 20)]);

                        var d3 = [];
                        for (var i = 0; i <= 10; i += 1)
                            d3.push([i, parseInt(Math.random() * 20)]);

                        this.data = new Array();

                        this.data.push({
                            label: "Data One",
                            data: d1
                        });
                        this.data.push({
                            label: "Data Two",
                            data: d2
                        });
                        this.data.push({
                            label: "Data Tree",
                            data: d3
                        });

                        this.plot = $.plot($(this.placeholder), this.data, this.options);
                    }
                }

            charts.chart_stacked_bars.init();
        }

    })(jQuery);
}

/* flotchart-pie.init.js */
function flotchartPieInit() {
    (function($)
    {
        if($("#chart_pie").length) {
            if (typeof charts == 'undefined')
                return;

            charts.chart_pie =
                {
                    // chart data
                    data: [
                        { label: "USA",  data: 38 },
                        { label: "Brazil",  data: 23 },
                        { label: "India",  data: 15 },
                        { label: "Turkey",  data: 9 },
                        { label: "France",  data: 7 },
                        { label: "China",  data: 5 },
                        { label: "Germany",  data: 3 }
                    ],

                    // will hold the chart object
                    plot: null,

                    // chart options
                    options:
                        {
                            series: {
                                pie: {
                                    show: true,
                                    highlight: {
                                        opacity: 0.1
                                    },
                                    radius: 1,
                                    stroke: {
                                        color: '#fff',
                                        width: 2
                                    },
                                    startAngle: 2,
                                    combine: {
                                        color: '#353535',
                                        threshold: 0.05
                                    },
                                    label: {
                                        show: true,
                                        radius: 1,
                                        formatter: function(label, series){
                                            return '<div class="label label-inverse">'+label+'&nbsp;'+Math.round(series.percent)+'%</div>';
                                        }
                                    }
                                },
                                grow: { active: false}
                            },
                            colors: [],
                            legend:{show:false},
                            grid: {
                                hoverable: true,
                                clickable: true,
                                backgroundColor : { }
                            },
                            tooltip: true,
                            tooltipOpts: {
                                content: "%s : %y.1"+"%",
                                shifts: {
                                    x: -30,
                                    y: -50
                                },
                                defaultTheme: false
                            }
                        },

                    placeholder: "#chart_pie",

                    // initialize
                    init: function()
                    {
                        // apply styling
                        charts.utility.applyStyle(this);

                        this.plot = $.plot($(this.placeholder), this.data, this.options);
                    }
                };

            charts.chart_pie.init();
        }

    })(jQuery);
}

/* flotchart-donut.init.js */
function flotchartDonutInit() {
    (function($) {
        if( $("#chart_donut").length > 0 ) {
            /* console.log("charts: ", charts);
            if ( typeof charts === 'undefined' )
                return; */

                charts.chart_donut = {
                    // chart data
                    data: [
                        { 
                            label: "USA",
                            data: 38 
                        },
                        { 
                            label: "Brazil",
                            data: 23
                        },
                        { 
                            label: "India",
                            data: 15
                        },
                        {
                            label: "Turkey",
                            data: 9 
                        },
                        {
                            label: "France",
                            data: 7
                        },
                        {
                            label: "China",
                            data: 5
                        },
                        {
                            label: "Germany",
                            data: 3
                        }
                    ],

                    // will hold the chart object
                    plot: null,

                    // chart options
                    options: {
                            series: {
                                pie: {
                                    show: true,
                                    innerRadius: 0.4,
                                    highlight: {
                                        opacity: 0.1
                                    },
                                    radius: 1,
                                    stroke: {
                                        color: '#fff',
                                        width: 8
                                    },
                                    startAngle: 2,
                                    combine: {
                                        color: '#EEE',
                                        threshold: 0.05
                                    },
                                    label: {
                                        show: true,
                                        radius: 1,
                                        formatter: function(label, series){
                                            return '<div class="label label-inverse">'+label+'&nbsp;'+Math.round(series.percent)+'%</div>';
                                        }
                                    }
                                },
                                grow: { active: false}
                            },
                            legend:{show:false},
                            grid: {
                                hoverable: true,
                                clickable: true,
                                backgroundColor : { }
                            },
                            colors: [],
                            tooltip: true,
                            tooltipOpts: {
                                content: "%s : %y.1"+"%",
                                shifts: {
                                    x: -30,
                                    y: -50
                                },
                                defaultTheme: false
                            }
                    },

                    placeholder: "#chart_donut",

                    // initialize
                    init: function() {
                        // apply styling
                        charts.utility.applyStyle(this);

                        this.plot = $.plot($(this.placeholder), this.data, this.options);
                    }
                };

                charts.chart_donut.init();
        }
    })(jQuery);
}

/* flotchart-bars-horizontal.init.js */
function flotchartBarsHorizontalInit() {
    (function($)
    {
        if($("#chart_horizontal_bars").length) {
            if (typeof charts == 'undefined')
                return;

            charts.chart_horizontal_bars =
                {
                    // chart data
                    data: null,

                    // will hold the chart object
                    plot: null,

                    // chart options
                    options:
                        {
                            grid: {
                                show: true,
                                aboveData: false,
                                color: "#3f3f3f" ,
                                labelMargin: 5,
                                axisMargin: 0,
                                borderWidth: 0,
                                borderColor:null,
                                minBorderMargin: 5 ,
                                clickable: true,
                                hoverable: true,
                                autoHighlight: false,
                                mouseActiveRadius: 20,
                                backgroundColor : { }
                            },
                            series: {
                                grow: {active:false},
                                bars: {
                                    show:true,
                                    horizontal: true,
                                    barWidth:0.2,
                                    fill:1
                                }
                            },
                            legend: { position: "ne", backgroundColor: null, backgroundOpacity: 0 },
                            colors: [],
                            tooltip: true,
                            tooltipOpts: {
                                content: "%s : %y.0",
                                shifts: {
                                    x: -30,
                                    y: -50
                                },
                                defaultTheme: false
                            }
                        },

                    placeholder: "#chart_horizontal_bars",

                    // initialize
                    init: function()
                    {
                        // apply styling
                        charts.utility.applyStyle(this);

                        var d1 = [];
                        for (var i = 0; i <= 5; i += 1)
                            d1.push([parseInt(Math.random() * 30),i ]);

                        var d2 = [];
                        for (var i = 0; i <= 5; i += 1)
                            d2.push([parseInt(Math.random() * 30),i ]);

                        var d3 = [];
                        for (var i = 0; i <= 5; i += 1)
                            d3.push([ parseInt(Math.random() * 30),i]);

                        this.data = new Array();
                        this.data.push({
                            data: d1,
                            bars: {
                                horizontal:true,
                                show: true,
                                barWidth: 0.2,
                                order: 1
                            }
                        });
                        this.data.push({
                            data: d2,
                            bars: {
                                horizontal:true,
                                show: true,
                                barWidth: 0.2,
                                order: 2
                            }
                        });
                        this.data.push({
                            data: d3,
                            bars: {
                                horizontal:true,
                                show: true,
                                barWidth: 0.2,
                                order: 3
                            }
                        });

                        this.plot = $.plot($(this.placeholder), this.data, this.options);
                    }
                };

            charts.chart_horizontal_bars.init();
        }

    })(jQuery);
}

/* flotchart-autoupdating.init.js */
function flotchartAutoUpdatingInit() {
    (function($)
    {
        if($("#chart_live").length) {
            if (typeof charts == 'undefined')
                return;

            charts.chart_live =
                {
                    // chart data
                    data: [],
                    totalPoints: 300,
                    updateInterval: 200,

                    // we use an inline data source in the example, usually data would
                    // be fetched from a server
                    getRandomData: function()
                    {
                        if (this.data.length > 0)
                            this.data = this.data.slice(1);

                        // do a random walk
                        while (this.data.length < this.totalPoints)
                        {
                            var prev = this.data.length > 0 ? this.data[this.data.length - 1] : 50;
                            var y = prev + Math.random() * 10 - 5;
                            if (y < 0)
                                y = 0;
                            if (y > 100)
                                y = 100;
                            this.data.push(y);
                        }

                        // zip the generated y values with the x values
                        var res = [];
                        for (var i = 0; i < this.data.length; ++i)
                            res.push([i, this.data[i]])
                        return res;
                    },

                    // will hold the chart object
                    plot: null,

                    // chart options
                    options:
                        {
                            series: {
                                grow: { active: false },
                                shadowSize: 0,
                                lines: {
                                    show: true,
                                    fill: true,
                                    lineWidth: 2,
                                    steps: false
                                }
                            },
                            grid: {
                                show: true,
                                aboveData: false,
                                color: "#3f3f3f",
                                labelMargin: 5,
                                axisMargin: 0,
                                borderWidth: 0,
                                borderColor:null,
                                minBorderMargin: 5 ,
                                clickable: true,
                                hoverable: true,
                                autoHighlight: false,
                                mouseActiveRadius: 20,
                                backgroundColor : { }
                            },
                            colors: [],
                            tooltip: true,
                            tooltipOpts: {
                                content: "Value is : %y.0",
                                shifts: {
                                    x: -30,
                                    y: -50
                                },
                                defaultTheme: false
                            },
                            yaxis: { min: 0, max: 100 },
                            xaxis: { show: true}
                        },

                    placeholder: "#chart_live",

                    // initialize
                    init: function()
                    {
                        // apply styling
                        charts.utility.applyStyle(this);

                        this.plot = $.plot($(this.placeholder), [ this.getRandomData() ], this.options);
                        setTimeout(this.update, charts.chart_live.updateInterval);
                    },

                    // update
                    update: function()
                    {
                        charts.chart_live.plot.setData([ charts.chart_live.getRandomData() ]);
                        charts.chart_live.plot.draw();

                        setTimeout(charts.chart_live.update, charts.chart_live.updateInterval);
                    }
                };

            charts.chart_live.init();
        }

    })(jQuery);
}

/* flotchart-finances-simple.init.js */
function flotchartFinancesSimpleInit() {
    (function($)
    {
        if($("#chart_finances_simple").length) {
            if (typeof charts == 'undefined')
                return;

            charts.chart_simple =
                {
                    // data
                    data:
                        {
                            d1: [],
                            d2: []
                        },

                    // will hold the chart object
                    plot: null,

                    // chart options
                    options:
                        {
                            grid:
                                {
                                    color: "#dedede",
                                    borderWidth: 1,
                                    borderColor: "transparent",
                                    clickable: true,
                                    hoverable: true
                                },
                            series: {
                                lines: {
                                    show: true,
                                    fill: false,
                                    lineWidth: 2,
                                    steps: false
                                },
                                points: {
                                    show:true,
                                    radius: 5,
                                    lineWidth: 3,
                                    fill: true,
                                    fillColor: "#000"
                                }
                            },
                            xaxis: {
                                tickColor: 'transparent',
                                tickDecimals: 2,
                                tickSize: 2
                            },
                            yaxis: {
                                tickSize: 1000
                            },
                            legend: { position: "nw", noColumns: 2, backgroundColor: null, backgroundOpacity: 0 },
                            shadowSize: 0,
                            tooltip: true,
                            tooltipOpts: {
                                content: "%s : %y.3",
                                shifts: {
                                    x: -30,
                                    y: -50
                                },
                                defaultTheme: false
                            }
                        },

                    placeholder: "#chart_finances_simple",

                    // initialize
                    init: function()
                    {
                        // this.options.colors = ["#72af46", "#466baf"];
                        this.options.colors = [successColor, primaryColor];
                        this.options.grid.backgroundColor = { colors: ["#fff", "#fff"]};

                        var that = this;

                        if (this.plot == null)
                        {
                            this.data.d1 = [ [6, 1300], [7, 1600], [8, 1900], [9, 2100], [10, 2500], [11, 2200], [12, 2000], [13, 1950], [14, 1900], [15, 2000] ];
                            this.data.d2 = [ [6, 500], [7, 600], [8, 550], [9, 600], [10, 800], [11, 900], [12, 800], [13, 850], [14, 830], [15, 1000] ];
                        }
                        this.plot = $.plot(
                            $(this.placeholder),
                            [{
                                label: "Data 1",
                                data: this.data.d1,
                                lines: { fill: 0.05 },
                                points: { fillColor: "#fff" }
                            },
                                {
                                    label: "Data 2",
                                    data: this.data.d2,
                                    lines: { fill: 0.1 },
                                    points: { fillColor: that.options.colors[1] }
                                }], this.options);
                    }
                };

            // uncomment to init on load
            charts.chart_simple.init();

            // use with tabs
            // $('a[href="#chart-simple-lines"]').on('shown.bs.tab', function(){
            //  if (charts.chart_simple.plot == null)
            //      charts.chart_simple.init();
            // });

            // $('.btn-group [data-toggle="tab"]').on('show.bs.tab', function(){
            //  $(this).parent().find('[data-toggle]').removeClass('active');
            //  $(this).addClass('active');
            // });
        }


    })(jQuery);

}

/* datepicker.init.js */
/* function datepickerInit() {

    $.fn.bdatepicker = $.fn.datepicker.noConflict();

    $(function()
    {

        // DatePicker
        // default
        $("#datepicker1").bdatepicker({
            format: 'yyyy-mm-dd',
            startDate: "2013-02-14"
        });

        // component
        $('#datepicker2').bdatepicker({
            format: "dd MM yyyy",
            startDate: "2013-02-14"
        });

        // today button
        $('#datepicker3').bdatepicker({
            format: "dd MM yyyy",
            startDate: "2013-02-14",
            todayBtn: true
        });

        // advanced
        $('#datetimepicker4').bdatepicker({
            format: "dd MM yyyy - hh:ii",
            autoclose: true,
            todayBtn: true,
            startDate: "2013-02-14 10:00",
            minuteStep: 10
        });

        // meridian
        $('#datetimepicker5').bdatepicker({
            format: "dd MM yyyy - HH:ii P",
            showMeridian: true,
            autoclose: true,
            startDate: "2013-02-14 10:00",
            todayBtn: true
        });

        if ($('#datepicker-box').length) $('#datepicker-box').bdatepicker({ inline: true, showOtherMonths:true });


        //window.initDatepicker = function(){
         // other
         // if ($('#datepicker').length) $("#datepicker").bdatepicker({ showOtherMonths:true });
         // if ($('#datepicker-box').length) $('#datepicker-box').bdatepicker({ inline: true, showOtherMonths:true });
        //}

        //initDatepicker();
    });
} */

/* uniform.init.js */
function uniformInit() {
    (function($){
        if ($('.uniformjs').length)
            $('.uniformjs').find(":checkbox, :radio").uniform();
    })(jQuery);
}

/* calendar.init.js */
function calendarInit() {
    $(function() {
        /* initialize the external events
         -----------------------------------------------------------------*/

        $('#external-events ul li').each(function()
        {

            // create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
            // it doesn't need to have a start or end
            var eventObject = {
                title: $.trim($(this).text()) // use the element's text as the event title
            };

            // store the Event Object in the DOM element so we can get to it later
            $(this).data('eventObject', eventObject);

            // make the event draggable using jQuery UI
            $(this).draggable(
                {
                    zIndex: 999,
                    revert: true,      // will cause the event to go back to its
                    revertDuration: 0,  //  original position after the drag,
                    start: function() { if (typeof mainYScroller != 'undefined') mainYScroller.disable(); },
                    stop: function() { if (typeof mainYScroller != 'undefined') mainYScroller.enable(); }
                });

        });

        /* initialize the calendar
         -----------------------------------------------------------------*/

        $('#calendar').fullCalendar({
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            editable: true,
            droppable: true,
            events: '/html/admin/ajax/calendarEvents.json',
            drop: function(date, allDay)
            {
                // retrieve the dropped element's stored Event Object
                var originalEventObject = $(this).data('eventObject');

                // we need to copy it, so that multiple events don't have a reference to the same object
                var copiedEventObject = $.extend({}, originalEventObject);

                // assign it the date that was reported
                copiedEventObject.start = date;
                copiedEventObject.allDay = allDay;

                // render the event on the calendar
                // the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
                $('#calendar').fullCalendar('renderEvent', copiedEventObject, true);

                // is the "remove after drop" checkbox checked?
                if ($('#drop-remove').is(':checked')) {
                    // if so, remove the element from the "Draggable Events" list
                    $(this).remove();
                }

            }
        });
    });
}

/* bootstrap-switch.js */
function switchBootstrap() {
    /*! ============================================================
     * bootstrapSwitch v1.8 by Larentis Mattia @SpiritualGuru
     * http://www.larentis.eu/
     *
     * Enhanced for radiobuttons by Stein, Peter @BdMdesigN
     * http://www.bdmdesign.org/
     *
     * Project site:
     * http://www.larentis.eu/switch/
     * ============================================================
     * Licensed under the Apache License, Version 2.0
     * http://www.apache.org/licenses/LICENSE-2.0
     * ============================================================ */

    !function ($) {
        "use strict";

        $.fn['bootstrapSwitch'] = function (method) {
            var inputSelector = 'input[type!="hidden"]';
            var methods = {
                init: function () {
                    return this.each(function () {
                            var $element = $(this)
                                , $div
                                , $switchLeft
                                , $switchRight
                                , $label
                                , $form = $element.closest('form')
                                , myClasses = ""
                                , classes = $element.attr('class')
                                , color
                                , moving
                                , onLabel = "ON"
                                , offLabel = "OFF"
                                , icon = false
                                , textLabel = false;

                            $.each(['switch-mini', 'switch-small', 'switch-large'], function (i, el) {
                                if (classes.indexOf(el) >= 0)
                                    myClasses = el;
                            });

                            $element.addClass('has-switch');

                            if ($element.data('on') !== undefined)
                                color = "switch-" + $element.data('on');

                            if ($element.data('on-label') !== undefined)
                                onLabel = $element.data('on-label');

                            if ($element.data('off-label') !== undefined)
                                offLabel = $element.data('off-label');

                            if ($element.data('label-icon') !== undefined)
                                icon = $element.data('label-icon');

                            if ($element.data('text-label') !== undefined)
                                textLabel = $element.data('text-label');

                            $switchLeft = $('<span>')
                                .addClass("switch-left")
                                .addClass(myClasses)
                                .addClass(color)
                                .html(onLabel);

                            color = '';
                            if ($element.data('off') !== undefined)
                                color = "switch-" + $element.data('off');

                            $switchRight = $('<span>')
                                .addClass("switch-right")
                                .addClass(myClasses)
                                .addClass(color)
                                .html(offLabel);

                            $label = $('<label>')
                                .html("&nbsp;")
                                .addClass(myClasses)
                                .attr('for', $element.find(inputSelector).attr('id'));

                            if (icon) {
                                $label.html('<i class="icon ' + icon + '"></i>');
                            }

                            if (textLabel) {
                                $label.html('' + textLabel + '');
                            }

                            $div = $element.find(inputSelector).wrap($('<div>')).parent().data('animated', false);

                            if ($element.data('animated') !== false)
                                $div.addClass('switch-animate').data('animated', true);

                            $div
                                .append($switchLeft)
                                .append($label)
                                .append($switchRight);

                            $element.find('>div').addClass(
                                $element.find(inputSelector).is(':checked') ? 'switch-on' : 'switch-off'
                            );

                            if ($element.find(inputSelector).is(':disabled'))
                                $(this).addClass('deactivate');

                            var changeStatus = function ($this) {
                                if ($element.parent('label').is('.label-change-switch')) {

                                } else {
                                    $this.siblings('label').trigger('mousedown').trigger('mouseup').trigger('click');
                                }
                            };

                            $element.on('keydown', function (e) {
                                if (e.keyCode === 32) {
                                    e.stopImmediatePropagation();
                                    e.preventDefault();
                                    changeStatus($(e.target).find('span:first'));
                                }
                            });

                            $switchLeft.on('click', function (e) {
                                changeStatus($(this));
                            });

                            $switchRight.on('click', function (e) {
                                changeStatus($(this));
                            });

                            $element.find(inputSelector).on('change', function (e, skipOnChange) {
                                var $this = $(this)
                                    , $element = $this.parent()
                                    , thisState = $this.is(':checked')
                                    , state = $element.is('.switch-off');

                                e.preventDefault();

                                $element.css('left', '');

                                if (state === thisState) {

                                    if (thisState)
                                        $element.removeClass('switch-off').addClass('switch-on');
                                    else $element.removeClass('switch-on').addClass('switch-off');

                                    if ($element.data('animated') !== false)
                                        $element.addClass("switch-animate");

                                    if (typeof skipOnChange === 'boolean' && skipOnChange)
                                        return;

                                    $element.parent().trigger('switch-change', {'el': $this, 'value': thisState})
                                }
                            });

                            $element.find('label').on('mousedown touchstart', function (e) {
                                var $this = $(this);
                                moving = false;

                                e.preventDefault();
                                e.stopImmediatePropagation();

                                $this.closest('div').removeClass('switch-animate');

                                if ($this.closest('.has-switch').is('.deactivate')) {
                                    $this.unbind('click');
                                } else if ($this.closest('.switch-on').parent().is('.radio-no-uncheck')) {
                                    $this.unbind('click');
                                } else {
                                    $this.on('mousemove touchmove', function (e) {
                                        var $element = $(this).closest('.make-switch')
                                            , relativeX = (e.pageX || e.originalEvent.targetTouches[0].pageX) - $element.offset().left
                                            , percent = (relativeX / $element.width()) * 100
                                            , left = 25
                                            , right = 75;

                                        moving = true;

                                        if (percent < left)
                                            percent = left;
                                        else if (percent > right)
                                            percent = right;

                                        $element.find('>div').css('left', (percent - right) + "%")
                                    });

                                    $this.on('click touchend', function (e) {
                                        var $this = $(this)
                                            , $target = $(e.target)
                                            , $myRadioCheckBox = $target.siblings('input');

                                        e.stopImmediatePropagation();
                                        e.preventDefault();

                                        $this.unbind('mouseleave');

                                        if (moving)
                                            $myRadioCheckBox.prop('checked', !(parseInt($this.parent().css('left')) < -25));
                                        else
                                            $myRadioCheckBox.prop("checked", !$myRadioCheckBox.is(":checked"));

                                        moving = false;
                                        $myRadioCheckBox.trigger('change');
                                    });

                                    $this.on('mouseleave', function (e) {
                                        var $this = $(this)
                                            , $myInputBox = $this.siblings('input');

                                        e.preventDefault();
                                        e.stopImmediatePropagation();

                                        $this.unbind('mouseleave');
                                        $this.trigger('mouseup');

                                        $myInputBox.prop('checked', !(parseInt($this.parent().css('left')) < -25)).trigger('change');
                                    });

                                    $this.on('mouseup', function (e) {
                                        e.stopImmediatePropagation();
                                        e.preventDefault();

                                        $(this).unbind('mousemove');
                                    });
                                }
                            });

                            if ($form.data('bootstrapSwitch') !== 'injected') {
                                $form.bind('reset', function () {
                                    setTimeout(function () {
                                        $form.find('.make-switch').each(function () {
                                            var $input = $(this).find(inputSelector);

                                            $input.prop('checked', $input.is(':checked')).trigger('change');
                                        });
                                    }, 1);
                                });
                                $form.data('bootstrapSwitch', 'injected');
                            }
                        }
                    );
                },
                toggleActivation: function () {
                    var $this = $(this);

                    $this.toggleClass('deactivate');
                    $this.find(inputSelector).prop('disabled', $this.is('.deactivate'));
                },
                isActive: function () {
                    return !$(this).hasClass('deactivate');
                },
                setActive: function (active) {
                    var $this = $(this);

                    if (active) {
                        $this.removeClass('deactivate');
                        $this.find(inputSelector).removeAttr('disabled');
                    }
                    else {
                        $this.addClass('deactivate');
                        $this.find(inputSelector).attr('disabled', 'disabled');
                    }
                },
                toggleState: function (skipOnChange) {
                    var $input = $(this).find(':checkbox');
                    $input.prop('checked', !$input.is(':checked')).trigger('change', skipOnChange);
                },
                toggleRadioState: function (skipOnChange) {
                    var $radioinput = $(this).find(':radio');
                    $radioinput.not(':checked').prop('checked', !$radioinput.is(':checked')).trigger('change', skipOnChange);
                },
                toggleRadioStateAllowUncheck: function (uncheck, skipOnChange) {
                    var $radioinput = $(this).find(':radio');
                    if (uncheck) {
                        $radioinput.not(':checked').trigger('change', skipOnChange);
                    }
                    else {
                        $radioinput.not(':checked').prop('checked', !$radioinput.is(':checked')).trigger('change', skipOnChange);
                    }
                },
                setState: function (value, skipOnChange) {
                    $(this).find(inputSelector).prop('checked', value).trigger('change', skipOnChange);
                },
                setOnLabel: function (value) {
                    var $switchLeft = $(this).find(".switch-left");
                    $switchLeft.html(value);
                },
                setOffLabel: function (value) {
                    var $switchRight = $(this).find(".switch-right");
                    $switchRight.html(value);
                },
                setOnClass: function (value) {
                    var $switchLeft = $(this).find(".switch-left");
                    var color = '';
                    if (value !== undefined) {
                        if ($(this).attr('data-on') !== undefined) {
                            color = "switch-" + $(this).attr('data-on')
                        }
                        $switchLeft.removeClass(color);
                        color = "switch-" + value;
                        $switchLeft.addClass(color);
                    }
                },
                setOffClass: function (value) {
                    var $switchRight = $(this).find(".switch-right");
                    var color = '';
                    if (value !== undefined) {
                        if ($(this).attr('data-off') !== undefined) {
                            color = "switch-" + $(this).attr('data-off')
                        }
                        $switchRight.removeClass(color);
                        color = "switch-" + value;
                        $switchRight.addClass(color);
                    }
                },
                setAnimated: function (value) {
                    var $element = $(this).find(inputSelector).parent();
                    if (value === undefined) value = false;
                    $element.data('animated', value);
                    $element.attr('data-animated', value);

                    if ($element.data('animated') !== false) {
                        $element.addClass("switch-animate");
                    } else {
                        $element.removeClass("switch-animate");
                    }
                },
                setSizeClass: function (value) {
                    var $element = $(this);
                    var $switchLeft = $element.find(".switch-left");
                    var $switchRight = $element.find(".switch-right");
                    var $label = $element.find("label");
                    $.each(['switch-mini', 'switch-small', 'switch-large'], function (i, el) {
                        if (el !== value) {
                            $switchLeft.removeClass(el);
                            $switchRight.removeClass(el);
                            $label.removeClass(el);
                        } else {
                            $switchLeft.addClass(el);
                            $switchRight.addClass(el);
                            $label.addClass(el);
                        }
                    });
                },
                status: function () {
                    return $(this).find(inputSelector).is(':checked');
                },
                destroy: function () {
                    var $element = $(this)
                        , $div = $element.find('div')
                        , $form = $element.closest('form')
                        , $inputbox;

                    $div.find(':not(input)').remove();

                    $inputbox = $div.children();
                    $inputbox.unwrap().unwrap();

                    $inputbox.unbind('change');

                    if ($form) {
                        $form.unbind('reset');
                        $form.removeData('bootstrapSwitch');
                    }

                    return $inputbox;
                }
            };

            if (methods[method])
                return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
            else if (typeof method === 'object' || !method)
                return methods.init.apply(this, arguments);
            else
                $.error('Method ' + method + ' does not exist!');
        };
    }(jQuery);
}

/* bootstrap-switch.init.js */
function bootstrapSwitchInit() {
    (function($){

        if (typeof $.fn.bootstrapSwitch != 'undefined' && $('.make-switch').length)
            $('.make-switch:not(.has-switch)').bootstrapSwitch();

    })(jQuery);
}

/* form-validator.init.js */
function formValidatorInit() {
    $.validator.setDefaults(
        {
            submitHandler: function() { alert("submitted!"); },
            showErrors: function(map, list)
            {
                this.currentElements.parents('label:first, div:first').find('.has-error').remove();
                this.currentElements.parents('.form-group:first').removeClass('has-error');

                $.each(list, function(index, error)
                {
                    var ee = $(error.element);
                    var eep = ee.parents('label:first').length ? ee.parents('label:first') : ee.parents('div:first');

                    ee.parents('.form-group:first').addClass('has-error');
                    eep.find('.has-error').remove();
                    eep.append('<p class="has-error help-block">' + error.message + '</p>');
                });
                //refreshScrollers();
            }
        });

    $(function()
    {
        // validate signup form on keyup and submit
        $("#validateSubmitForm").validate({
            rules: {
                firstname: "required",
                lastname: "required",
                username: {
                    required: true,
                    minlength: 2
                },
                password: {
                    required: true,
                    minlength: 5
                },
                confirm_password: {
                    required: true,
                    minlength: 5,
                    equalTo: "#password"
                },
                email: {
                    required: true,
                    email: true
                },
                topic: {
                    required: "#newsletter:checked",
                    minlength: 2
                },
                agree: "required"
            },
            messages: {
                firstname: "Please enter your firstname",
                lastname: "Please enter your lastname",
                username: {
                    required: "Please enter a username",
                    minlength: "Your username must consist of at least 2 characters"
                },
                password: {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 5 characters long"
                },
                confirm_password: {
                    required: "Please provide a password",
                    minlength: "Your password must be at least 5 characters long",
                    equalTo: "Please enter the same password as above"
                },
                email: "Please enter a valid email address",
                agree: "Please accept our policy"
            }
        });

        // propose username by combining first- and lastname
        $("#username").focus(function() {
            var firstname = $("#firstname").val();
            var lastname = $("#lastname").val();
            if(firstname && lastname && !this.value) {
                this.value = firstname + "." + lastname;
            }
        });

        //code to hide topic selection, disable for demo
        var newsletter = $("#newsletter");
        // newsletter topics are optional, hide at first
        var inital = newsletter.is(":checked");
        var topics = $("#newsletter_topics")[inital ? "removeClass" : "addClass"]("gray");
        var topicInputs = topics.find("input").attr("disabled", !inital);
        // show when newsletter is checked
        newsletter.click(function() {
            topics[this.checked ? "removeClass" : "addClass"]("gray");
            topicInputs.attr("disabled", !this.checked);
        });
    });
}

/* dropzone.init.js */
function dropzoneInit() {
    (function($) {
        if (typeof Dropzone != 'undefined')
            Dropzone.autoDiscover = false;

        if ($.fn.dropzone != 'undefined')
            $('.dropzone').dropzone();
    })(jQuery);
}

/* plupload.init.js */
function plUploadInit() {
    $(function()
    {
        /* Plupload */
        $("#pluploadUploader").pluploadQueue({
            // General settings
            runtimes : 'gears,browserplus,html5',
            url : 'upload.php',
            max_file_size : '10mb',
            chunk_size : '1mb',
            unique_names : true,

            // Resize images on clientside if we can
            resize : {width : 320, height : 240, quality : 90},

            // Specify what files to browse for
            filters : [
                {title : "Image files", extensions : "jpg,gif,png"},
                {title : "Zip files", extensions : "zip"}
            ],

            // Flash settings
            flash_swf_url : 'plupload.flash.swf',

            // Silverlight settings
            silverlight_xap_url : 'plupload.silverlight.xap'
        });

        // Client side form validation
        $('#pluploadForm').submit(function(e) {
            var uploader = $('#pluploadUploader').pluploadQueue();

            // Files in queue upload them first
            if (uploader.files.length > 0) {
                // When all files are uploaded submit form
                uploader.bind('StateChanged', function() {
                    if (uploader.files.length === (uploader.total.uploaded + uploader.total.failed)) {
                        $('#pluploadForm').submit();
                    }
                });

                uploader.start();
            } else {
                alert('You must queue at least one file.');
            }

            return false;
        });
    });
}

/* core.init.js */
function coreInit() {
    /* Remove Envato Frame */
    if (window.location != window.parent.location)
        top.location.href = document.location.href;

    (function($, window)
    {

        window.onunload = function(){};

        $.expr[':'].scrollable = function( elem )
        {
            var scrollable = false,
                props = [ '', '-x', '-y' ],
                re = /^(?:auto|scroll)$/i,
                elem = $(elem);

            $.each( props, function(i,v){
                return !( scrollable = scrollable || re.test( elem.css( 'overflow' + v ) ) );
            });

            return scrollable;
        };

        if (!Modernizr.touch && $('[href="#template-options"][data-auto-open]').length)
            $('#template-options').collapse('show');

        window.beautify = function (source)
        {
            var output,
                opts = {};

            opts.preserve_newlines = false;
            output = html_beautify(source, opts);
            return output;
        }

        // generate a random number within a range (PHP's mt_rand JavaScript implementation)
        window.mt_rand = function (min, max)
        {
            var argc = arguments.length;
            if (argc === 0) {
                min = 0;
                max = 2147483647;
            }
            else if (argc === 1) {
                throw new Error('Warning: mt_rand() expects exactly 2 parameters, 1 given');
            }
            else {
                min = parseInt(min, 10);
                max = parseInt(max, 10);
            }
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        // scroll to element animation
        function scrollTo(id)
        {
            if ($(id).length)
                $('html,body').animate({scrollTop: $(id).offset().top},'slow');
        }

        window.resizeNiceScroll = function()
        {
            setTimeout(function(){
                $('.hasNiceScroll, #menu_kis, #menu').getNiceScroll().show().resize();
            }, 100);
        }

        // $('#content .modal').appendTo('body');

        // tooltips
        $('body').tooltip({ selector: '[data-toggle="tooltip"]' });

        // popovers
        $('[data-toggle="popover"]').popover();

        // print
        $('[data-toggle="print"]').click(function(e)
        {
            e.preventDefault();
            window.print();
        });

        // carousels
        $('.carousel').each(function() {
            $(this).carousel();
        });

        // Google Code Prettify
        if ($('.prettyprint').length && typeof prettyPrint != 'undefined')
            prettyPrint();

        // show/hide toggle buttons
        $('[data-toggle="hide"]').click(function()
        {
            if ($(this).is('.bootboxTarget'))
                bootbox.alert($($(this).attr('data-target')).html());
            else {
                $($(this).attr('data-target')).toggleClass('hide');
                if ($(this).is('.scrollTarget') && !$($(this).attr('data-target')).is('.hide'))
                    scrollTo($(this).attr('data-target'));
            }
        });

        $('ul.collapse')
            .on('show.bs.collapse', function(e)
            {
                e.stopPropagation();
                $(this).closest('li').addClass('active');
            })
            .on('hidden.bs.collapse', function(e)
            {
                e.stopPropagation();
                $(this).closest('li').removeClass('active');
            });

        $('[data-toggle="navbar-color"]').on('click', function(e){
            e.preventDefault();

            if ($(this).is('.active'))
                return;

            $('.navbar.main').toggleClass('navbar-inverse');

            $(this).parent().find('[data-toggle="navbar-color"].active').removeClass('active');
            $(this).addClass('active');
        });

        window.enableContentNiceScroll = function(hide)
        {
            if ($('html').is('.ie') || Modernizr.touch)
                return;

            if (typeof $.fn.niceScroll == 'undefined')
                return;

            if (typeof hide == 'undefined')
                var hide = true;

            $('#content .col-app, .col-separator')
                .filter(':scrollable')
                .not('.col-unscrollable')
                .filter(function(){
                    return !$(this).find('> .col-table').length;
                })
                .addClass('hasNiceScroll')
                .each(function()
                {
                    $(this).niceScroll({
                        horizrailenabled: false,
                        zindex: 2,
                        cursorborder: "none",
                        cursorborderradius: "0",
                        cursorcolor: primaryColor
                    });

                    if (hide == true)
                        $(this).getNiceScroll().hide();
                    else
                        $(this).getNiceScroll().resize().show();
                });
        }

        window.disableContentNiceScroll = function()
        {
            $('#content .hasNiceScroll').getNiceScroll().remove();
        }

        enableContentNiceScroll();

        if ($('html').is('.ie'))
            $('html').removeClass('app');

        $('body')
            .on('mouseenter', '[data-toggle="dropdown"].dropdown-hover', function()
            {
                if (!$(this).parent('.dropdown').is('.open'))
                    $(this).click();
            });

        $('.navbar.main')
            .add('#menu-top')
            .on('mouseleave', function(){
                $(this).find('.dropdown.open').find('> [data-toggle="dropdown"]').click();
            });

        $('[data-height]').each(function(){
            $(this).height($(this).data('height'));
        });

        $('.app [data-toggle="tab"]')
            .on('shown.bs.tab', function(e)
            {
                $('.hasNiceScroll').getNiceScroll().resize();
            });

        window.enableNavbarMenusHover = function(){
            $('.navbar.main [data-toggle="dropdown"]')
                .add('#menu-top [data-toggle="dropdown"]')
                .addClass('dropdown-hover');
        }

        window.disableNavbarMenusHover = function(){
            $('.navbar.main [data-toggle="dropdown"]')
                .add('#menu-top [data-toggle="dropdown"]')
                .removeClass('dropdown-hover');
        }

        window.enableResponsiveNavbarSubmenus = function(){
            $('.navbar .dropdown-submenu > a').on('click', function(e){
                e.preventDefault();
                e.stopPropagation();
                $(this).parent().toggleClass('open');
            });
        }

        window.disableResponsiveNavbarSubmenus = function(){
            $('.navbar .dropdown-submenu > a')
                .off('click')
                .parent()
                .removeClass('open');
        }

        if (typeof $.fn.setBreakpoints !== 'undefined')
        {
            $(window).setBreakpoints({
                distinct: false,
                breakpoints: [
                    768,
                    992
                ]
            });

            $(window).bind('exitBreakpoint768',function() {
                $('.container-fluid').addClass('menu-hidden');
                disableNavbarMenusHover();
                enableResponsiveNavbarSubmenus();
            });

            $(window).bind('enterBreakpoint768',function() {
                $('.container-fluid').removeClass('menu-hidden');
                enableNavbarMenusHover();
                disableResponsiveNavbarSubmenus();
            });

            $(window).bind('exitBreakpoint992',function() {
                disableContentNiceScroll();
            });

            $(window).bind('enterBreakpoint992',function() {
                enableContentNiceScroll(false);
            });
        }

        $(window).on('load', function()
        {
            if ($(window).width() < 992)
                $('.hasNiceScroll').getNiceScroll().stop();

            if ($(window).width() < 768)
                enableResponsiveNavbarSubmenus();
            else
                enableNavbarMenusHover();

            if (typeof animations == 'undefined' && typeof $.fn.niceScroll !== 'undefined')
                $('.hasNiceScroll, #menu_kis, #menu').getNiceScroll().show().resize();

            if (typeof Holder != 'undefined')
            {
                Holder.add_theme("dark", {background:"#424242", foreground:"#aaa", size:9}).run();
                Holder.add_theme("white", {background:"#fff", foreground:"#c9c9c9", size:9}).run();
            }
        });

    })(jQuery, window);
}

/* medical.init.js */
function medicalInit() {
    (function($)
    {
        if (typeof charts == 'undefined')
            return;

        charts.metricsDrawHook = function (plot, canvascontext)
        {
            var t = $('#metrics table');

            if (!t.length)
                return;

            if (t.length && t.is('.metricsDrawHook'))
                return;

            t.addClass('metricsDrawHook');
            t.find('tr').append('<td class="legendSelect"><input type="checkbox" checked="checked"></td>');
        }

        charts.chart_gender =
            {
                // chart data
                data: null,

                // will hold the chart object
                plot: null,

                // chart options
                options:
                    {
                        bars: {
                            show:true,
                            barWidth: 0.3,
                            fill:1
                        },
                        grid: {
                            show: true,
                            aboveData: false,
                            color: "#3f3f3f",
                            labelMargin: 5,
                            axisMargin: 0,
                            borderWidth: 0,
                            borderColor:null,
                            minBorderMargin: 5,
                            clickable: true,
                            hoverable: true,
                            autoHighlight: false,
                            mouseActiveRadius: 20,
                            backgroundColor : { }
                        },
                        legend: { show: false, position: "ne", backgroundColor: null, backgroundOpacity: 0 },
                        colors: []
                    },

                placeholder: "#chart_gender",

                // initialize
                init: function()
                {
                    if (!$(this.placeholder).length)
                        return;

                    // apply styling
                    this.options.colors = ["#D67FB0", "#4193d0"];
                    this.options.grid.backgroundColor = { colors: ["transparent", "transparent"]};
                    this.options.grid.borderColor = primaryColor;
                    this.options.grid.color = primaryColor;

                    //some data
                    var d1 = [];
                    for (var i = 0; i <= 10; i += 1)
                        d1.push([i, parseInt(Math.random() * 30)]);

                    var d2 = [];
                    for (var i = 0; i <= 10; i += 1)
                        d2.push([i, parseInt(Math.random() * 30)]);

                    var ds = new Array();

                    ds.push({
                        label: "Data One",
                        data:d1,
                        bars: {order: 1}
                    });
                    ds.push({
                        label: "Data Two",
                        data:d2,
                        bars: {order: 2}
                    });
                    this.data = ds;

                    this.plot = $.plot($(this.placeholder), this.data, this.options);
                }
            };

        charts.chart_metrics =
            {
                // chart data
                data:
                    {
                        d: []
                    },

                // will hold the chart object
                plot: null,

                // chart options
                options:
                    {
                        grid: {
                            show: true,
                            aboveData: true,
                            color: "#3f3f3f",
                            labelMargin: 5,
                            axisMargin: 0,
                            borderWidth: 0,
                            borderColor:null,
                            minBorderMargin: 5 ,
                            clickable: true,
                            hoverable: true,
                            autoHighlight: true,
                            mouseActiveRadius: 20,
                            backgroundColor : { }
                        },
                        series: {
                            grow: { active:true, duration: 200 },
                            lines: {
                                show: true,
                                fill: .07,
                                lineWidth: 2
                            },
                            points: {show:false}
                        },
                        legend: {
                            backgroundColor: null,
                            backgroundOpacity: 0,
                            container: $('#metrics'),
                            labelFormatter: function(label, series) {
                                return '<a href="#" data-toggle="charts-metrics-toggle" data-series-idx="' + series.idx + '">' + label + '</a>';
                            }
                        },
                        yaxis: { min: 0 },
                        xaxis: {ticks:11, tickDecimals: 0},
                        colors: [],
                        shadowSize:1,
                        tooltip: true,
                        tooltipOpts: {
                            content: "%s : %y.0",
                            shifts: {
                                x: -30,
                                y: -50
                            },
                            defaultTheme: false
                        },
                        hooks: { draw: [charts.metricsDrawHook] }
                    },

                placeholder: "#chart_metrics",

                toggle: function(id)
                {
                    var d = this.plot.getData(),
                        show = d[id].grow.growings[0].stepDirection == 'down',
                        nd = [];

                    if (show)
                    {
                        d[id].grow.growings[0].stepDirection = 'up';
                        d[id].data = this.data.d[id];
                    }
                    else
                    {
                        var max = d[id].data.length;
                        d[id].data = [];

                        for (var i=1;i<=max;i++)
                            d[id].data.push([i, 0]);

                        d[id].grow.growings[0].stepDirection = 'down';
                    }

                    this.plot.setData(d);
                    this.plot.draw();
                },

                changeData: function(){
                    var d = this.plot.getData(),
                        that = this;

                    this.data.d = [];

                    // generate some data
                    for (var i=0;i<=5;i++)
                    {
                        this.data.d.push([]);
                        for (var j=1;j<=30;j++)
                            this.data.d[i].push([j, ((6-i)*10)+charts.utility.randNum()]);
                    }

                    $.each(d, function(index, value){
                        var a = $('[data-series-idx="'+index+'"]'),
                            c = a.closest('tr').find(':checked').length;

                        d[index].data = c ? that.data.d[index] : [];
                    });

                    this.plot.setData(d);
                    this.plot.draw();
                },

                // initialize
                init: function()
                {
                    if (!$(this.placeholder).length)
                        return;

                    var that = this;

                    $('body')
                        .on('click', '[data-toggle="charts-metrics-toggle"]', function(e)
                        {
                            e.preventDefault();
                            charts.chart_metrics.toggle($(this).attr('data-series-idx'));
                        })
                        .on('change', '.legendSelect :checkbox', function(){
                            var idx = $(this).closest('tr').find('[data-toggle="charts-metrics-toggle"]').attr('data-series-idx');
                            charts.chart_metrics.toggle(idx);
                        })
                        .on('click', '#metrics table tr', function(e){
                            if ($(e.target).is('a') || $(e.target).is(':checkbox'))
                                return;

                            var c = $(this).find(':checkbox');
                            c.prop('checked', !c.prop('checked')).trigger('change');
                        })
                        .on('click', '[data-toggle="charts-metrics-changedata"] .btn', function(){
                            if ($(this).is('.active')) return;
                            $('[data-toggle="charts-metrics-changedata"] .btn.active').removeClass('active');
                            $(this).addClass('active');
                            charts.chart_metrics.changeData();
                        });

                    // apply styling
                    this.options.colors = [primaryColor, "#cc6666", "#cca366", "#b7cc66", "#7acc66", "#66cccc"];
                    this.options.grid.backgroundColor = { colors: ["transparent", "transparent"]};
                    this.options.grid.borderColor = primaryColor;
                    this.options.grid.color = primaryColor;

                    // generate some data
                    for (var i=0;i<=5;i++)
                    {
                        this.data.d.push([]);
                        for (var j=1;j<=30;j++)
                            this.data.d[i].push([j, ((6-i)*10)+charts.utility.randNum()]);
                    }

                    // make chart
                    this.plot = $.plot(
                        this.placeholder,
                        [{
                            label: "Hypertension",
                            data: this.data.d[0],
                            idx: 0,
                            grow: { growings:[ { stepMode: "linear" } ] }
                        },
                            {
                                label: "Blood Pressure",
                                data: this.data.d[1],
                                idx: 1
                            },
                            {
                                label: "Blood Sugar",
                                data: this.data.d[2],
                                idx: 2
                            },
                            {
                                label: "Alergy",
                                data: this.data.d[3],
                                idx: 3
                            },
                            {
                                label: "Macrobacterium",
                                data: this.data.d[4],
                                idx: 4
                            },
                            {
                                label: "Quadrigeminy",
                                data: this.data.d[5],
                                idx: 5
                            }],
                        this.options);
                }
            };

        charts.chart_gender.init();
        charts.chart_metrics.init();


    })(jQuery);

}

/* tables-responsive-footable.init.js */
function tablesResponsiveFootableInit() {
    $(function()
    {
        /* FooTable */
        if ($('.footable').length)
            $('.footable').footable();
    });
}

/* dashboard.init.js */
function initDashboard() {
    animationsInit();
    easyPieInit();
    widgetScrollableInit();
    bootstrapDatepickerInit();
    flotchartSimpleInit();
    flotchartSimpleBarsInit();
}

/* portfolio.init.js */
function initPortfolio() {
    prettyPhotoInit();
    mixItUpInit();
}

$(function() {
    initPortfolio();
});

/* support-tickets.init.js */
function initSupportTickets() {
    bootstrapDatepickerInit();
    fueluxCheckBoxInit();
}

$(function() {
    initSupportTickets();
});

/* support-questions.init.js */
function initSupportQuestions() {
    fueluxCheckBoxInit();
}

$(function() {
    initSupportQuestions();
});

/* support-answers.init.js */
function initSupportAnswers() {
    fueluxCheckBoxInit();
}

$(function() {
    initSupportAnswers();
});

/* events.init.js */
function initEvents() {
    eventsCarouselInit();
}

$(function() {
    initEvents();
});

/* photo-gallery.init.js */
function initPhotoGallery() {
    gridaliciousInit();
}

$(function() {
    initPhotoGallery();
});

/* gallery-video.init.js */
function initGalleryVideo() {
    gridaliciousInit();
    prettyPhotoInit();
}

$(function() {
    initGalleryVideo();
});

/* carousel.init.js */
function initCarousel() {
    gridaliciousInit();
}

$(function() {
    initCarousel();
});

/* buttons.init.js */
function initButtons() {
    jqueryBootpagInit();
    uiInit();
}

$(function() {
    initButtons();
});

/* tables.init.js */
function tablesInit() {
    jQueryDataTables();
    //tableTools();
    colVis();
    dtBootstrap();
    dataTablesInit();
    fueluxCheckBoxInit();
    bootstrapSelectInit();
    tablesClassicInit();
}

$(function() {
    tablesInit();
});

/* tables-responsive.init.js */
function tablesResponsiveInit() {
    footableJQuery();
    tablesResponsiveFootableInit();
}

$(function() {
    tablesResponsiveInit();
});

/* notifications.init.js */
function initNotifications() {
    notyfyInit();
    gritterInit();
}

$(function() {
    initNotifications();
});

/* modals.init.js */
function initModals() {
    fueluxCheckBoxInit();
    modalsBootBoxInit();
    gritterInit();
    wysiHTML5();
    formWizardsInit();
}

$(function() {
    initModals();
});

/* widgets.init.js */
function initWidgets() {
    holderInit();
    easyPieInit();
    widgetCollapsibleInit();
    widgetProgressInit();
    widgetScrollableInit();
}

$(function() {
    initWidgets();
});

/* calendar.render.init.js */
function initCalendar() {
    uniformInit();
    calendarInit();
    bootstrapDatepickerInit();
}

$(function() {
    initCalendar();
});

/* sliders.init.js */
function initSliders() {
    jQueryRangeSliders();
    jqueryUiSlidersInit();
    rangeSlidersInit();
}

$(function() {
    initSliders();
});

/* form-wizards.render.init.js */
function initFormWizards() {
    wysiHTML5();
    formWizardsInit();
}

$(function() {
    initFormWizards();
});

function colorPickerInit() {
    var $colorPicker = $("#colorpickerColor");

        $colorPicker.colorpicker();

        $colorPicker.on('colorpickerChange', function(event) {
            $colorPicker.css('background-color', event.color.toString());
        });
}

function inputMaskInit() {
    $("#inputmask-date").inputmask("99/99/9999");
    $("#inputmask-date-1").inputmask("99/99/9999");
    $("#inputmask-date-2").inputmask("dd/mm/yyyy");
    $("#inputmask-currency").inputmask("€ 999.999.999,99");
    $("#inputmask-phone").inputmask("(999) 999-9999");
    $("#inputmask-tax").inputmask("99-9999999");
    $("#inputmask-decimal").inputmask("999.99");
    $("#inputmask-ssn").inputmask("999-99-9999");
}

/* form-elements.init.js */
function initFormElements() {
    switchBootstrap();
    bootstrapSwitchInit();
    fueluxCheckBoxInit();
    formWizardsInit();
    bootstrapDatepickerInit();
    bootstrapTimePickerInit();
    colorPickerInit();
    inputMaskInit();
}

$(function() {
    initFormElements();
});

/* form-validator.render.init.js */
function initFormValidator() {
    formValidatorInit();
}

$(function() {
    initFormValidator();
});

/* file-manager.init.js */
function initFileManger() {
    plUploadInit();
    dropzoneInit();
}

$(function() {
    initFileManger();
});

/* inbox.init.js */
function initInbox() {
    coreInit();
}

$(function() {
    initInbox();
});

/* finances.init.js */
function initFinances() {
    flotchartFinancesSimpleInit();
}

/* invoice.init.js */

function initInvoice() {
    coreInit();
}

$(function() {
    initInvoice();
});

/* bookings.init.js */
function initBookings() {
    tablesClassicInit();
    bootstrapSelectInit();
}

$(function() {
    initBookings();
});

/* medical-overview.init.js */
function initMedicalOverview() {
    easyPieInit();
    medicalInit();
}

$(function() {
    initMedicalOverview();
});

/* medical-appointments.init.js */
function initMedicalAppointments() {
    bootstrapDatepickerInit();
}

$(function() {
    initMedicalAppointments();
});

/* medical-metrics.init.js */
function initMedicalMetrics() {
    medicalInit();

}

$(function() {
    initMedicalMetrics();
});

/* social.init.js */
function initSocial() {
    holderInit();
}

$(function() {
    initSocial();
});

/* shop-edit-products.init.js */
function initShopEditProductsInit() {
    wysiHTML5();
}

$(function() {
    initShopEditProductsInit();
});

/* shop-products.init.js */
function initShopProductsInit() {
    holderInit();
    bootstrapSelectInit();
    uniformInit();
    tablesClassicInit();
}

$(function() {
    initShopProductsInit();
});

/* my-account.init.js */
function initMyAccountInit() {
    holderInit();
    wysiHTML5();
}

$(function() {
    initMyAccountInit();
});

/* ratings.init.js */
function initRatings() {
    holderInit();
    tablesResponsiveFootableInit();
}

/* remove body style */
function removeStyleAttr() {
    var $body = $("body");

        setTimeout(function() {
            $body.removeAttr("style");
        }, 1000);
}

$(function() {
    var $body       = $("body"),
        $document   = $("document");

        initRatings();

        $(".dataTables_wrapper").find(".separator").addClass("d-flex flex-row");

        $body.on("click", "#blueimp-gallery .close.no-ajaxify", function() {
            removeStyleAttr();
        });

        $document.keyup(function(e) {
            if ( e.keyCode === 27 ) {
                removeStyleAttr();
            }
        });

        $body.on("mouseover", "#melis-id-nav-bar-tabs li a[title], .navbar-right li a[title], #id_meliscore_header_logout a i[title], #content a[title]", function() {
            var $this = $(this);

                $this.tooltip().tooltip("disable");
                //$this.attr("title", $this.text());
        });

        // <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
        $body.on("click", ".spinner-border-btn", function() {
            var $this       = $(this),
                $spinner    = $(".spinner-border"),
                spinnerHtml = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>';

                if ( $spinner.length === 0 ) {
                    $this.prepend( spinnerHtml );
                }
        });

        /* $body.on("click", ".btn-single-toggle", function() {
            var $this = $(this);

                if ( $this.hasClass("active") ) {
                    $this.removeClass("active");
                    $this.removeClass("focus");
                }
                else {
                    $this.addClass("active");
                    $this.removeClass("focus");
                }
        }); */
});

/* charts.init.js */
function initCharts() {
    flotchartSimple02Init();
    flotChartLineInit();
    flotchartBarsOrderedInit();
    flotchartBarsStackedInit();
    flotchartDonutInit();
    flotchartPieInit();
    flotchartBarsHorizontalInit();
    flotchartAutoUpdatingInit();
}