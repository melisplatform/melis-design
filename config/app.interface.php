<?php

return [
    'plugins' => [
        'meliscore' => [
            'interface' => [
                'meliscore_leftmenu' => [
                    'interface' => [
                        'meliscore_toolstree_section' => [
                            'interface' => [
                                'meliscore_tool_creatrion_designs' => [
                                    'conf' => [
                                        'id' => 'id_meliscore_tool_creatrion_designs',
                                        'melisKey' => 'meliscore_tool_creatrion_designs',
                                        'name' => 'tr_meliscore_tool_creatrion_designs',
                                        'icon' => 'fa fa-paint-brush',
                                    ],
                                    'interface' => [
                                        'melisdesign_leftnemu' =>  [
                                            'conf' => [
                                                'type' => 'melisdesign/interface/melisdesign_cof'
                                            ],
                                        ],  
                                    ]
                                ]
                            ],
                        ],
                    ],
                ],
            ],
        ],
        'melisdesign' => [
            'conf' => [
                'id' => '',
                'name' => 'tr_melistooldesign_title',
                'rightsDisplay' => 'none',
            ],
            'ressources' => [
                'css' => [
                    '/MelisDesign/css/prettyPhoto.css',
                    '/MelisDesign/assets/components/plugins/fullcalendar/dist/fullcalendar.min.css',
                    '/MelisDesign/assets/components/library/bootstrap-icons/font/bootstrap-icons.min.css',
                    '/MelisDesign/css/design-tool.css',
                    '/MelisDesign/css/datatables/datatables.min.css',
                    '/MelisDesign/css/tiny-slider/tiny-slider.css',
                    '/MelisDesign/css/tiny-slider/custom-tiny-slider.css',
                    '/MelisDesign/assets/components/plugins/prism/css/prism.css',
                ],
                'js' => [
                    '/MelisDesign/js/melis-design.concat-plugins.js',
                    '/MelisDesign/assets/components/plugins/fullcalendar/dist/index.global.min.js',
                    '/MelisDesign/assets/components/plugins/fullcalendar/packages/bootstrap5/index.global.min.js',
                    '/MelisDesign/js/melis-design.concat-init.js',
                    '/MelisDesign/js/tiny-slider/tiny-slider.init.js',
                    '/MelisDesign/assets/components/plugins/prism/js/prism.js',
                ],
                /**
                 * the "build" configuration compiles all assets into one file to make
                 * lesser requests
                 */
                'build' => [
                    'disable_bundle' => true,
                    // lists of assets that will be loaded in the layout
                    'css' => [
                        '/MelisDesign/build/css/bundle.css',
                    ],
                    'js' => [
                        '/MelisDesign/build/js/bundle.js',
                    ]
                ]
            ],
            'datas' => [
                /**
                 * Used to copy necessary file to
                 * main public/bundles-generated folder
                 */
                'bundle_all_needed_files' => [
                    //will be put inside css folder
                    'css' => [
                        '/assets/components/library/bootstrap-icons/font/fonts'
                    ],
                    //will be put inside js folder
                    'js' => [

                    ]
                ]
            ]
            ,
            'interface' => [

                'melisdesign_cof' => [
                    'conf' => [
                        'id' => 'id_medesign_leftnemu',
                        'melisKey' => 'id_medesign_leftnemu_leftnemu',
                        'name' => 'HTML',
                        'icon' => 'fa-paint-brush',
                    ],
                    'interface' => [
                        'melis_dashboard' => [
                            'conf' => [
                                'id' => 'id_melis_dashboard',
                                'melisKey' => 'melis_dashboard',
                                'name' => 'Dashboard',
                                'icon' => 'fa-tachometer',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'Dashboard',
                                'action' => 'render-dashboard',
                                'jscallback' => 'initDashboard();',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_profile_resume' => [
                            'conf' => [
                                'id' => 'id_melis_profile_resume',
                                'melisKey' => 'melis_profile_resume',
                                'name' => 'Profile / Resume',
                                'icon' => 'fa-user',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'ProfileResume',
                                'action' => 'render-profile-resume',
                                'jscallback' => '',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_portfolio' => [
                            'conf' => [
                                'id' => 'id_melis_portfolio',
                                'melisKey' => 'melis_portfolio',
                                'name' => 'Portfolio',
                                'icon' => 'fa-user-secret',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'Portfolio',
                                'action' => 'render-portfolio',
                                'jscallback' => 'initPortfolio();',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_support_tickets' => [
                            'conf' => [
                                'id' => 'id_melis_support_tickets',
                                'melisKey' => 'melis_support_tickets',
                                'name' => 'Support Tickets',
                                'icon' => 'fa-ticket',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'SupportTickets',
                                'action' => 'render-support-tickets',
                                'jscallback' => 'initSupportTickets();',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_support_forum_overview' => [
                            'conf' => [
                                'id' => 'id_melis_support_forum_overview',
                                'melisKey' => 'melis_support_forum_overview',
                                'name' => 'Forum Overview',
                                'icon' => 'fa-list',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'SupportForumOverview',
                                'action' => 'render-support-forum-overview',
                                'jscallback' => '',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_support_forum_post' => [
                            'conf' => [
                                'id' => 'id_melis_support_forum_post',
                                'melisKey' => 'melis_support_forum_post',
                                'name' => 'Forum Post',
                                'icon' => 'fa-newspaper-o',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'SupportForumPost',
                                'action' => 'render-support-forum-post',
                                'jscallback' => '',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_support_questions' => [
                            'conf' => [
                                'id' => 'id_melis_support_questions',
                                'melisKey' => 'melis_support_questions',
                                'name' => 'Q&A Listing',
                                'icon' => 'fa-question-circle',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'SupportQuestions',
                                'action' => 'render-support-questions',
                                'jscallback' => 'initSupportQuestions();',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_support_answers' => [
                            'conf' => [
                                'id' => 'id_melis_support_answers',
                                'melisKey' => 'melis_support_answers',
                                'name' => 'Q&A Page',
                                'icon' => 'fa-list-alt',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'SupportAnswers',
                                'action' => 'render-support-answers',
                                'jscallback' => 'initSupportAnswers();',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_support_knowledge' => [
                            'conf' => [
                                'id' => 'id_melis_support_knowledge',
                                'melisKey' => 'melis_support_knowledge',
                                'name' => 'Knowledge Base',
                                'icon' => 'fa-search-plus',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'SupportKnowledge',
                                'action' => 'render-support-knowledge',
                                'jscallback' => '',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_pricing_tables' => [
                            'conf' => [
                                'id' => 'id_melis_pricing_tables',
                                'melisKey' => 'melis_pricing_tables',
                                'name' => 'Pricing Tables',
                                'icon' => 'fa-dollar',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'PricingTables',
                                'action' => 'render-pricing-tables',
                                'jscallback' => '',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_survey' => [
                            'conf' => [
                                'id' => 'id_melis_survey',
                                'melisKey' => 'melis_survey',
                                'name' => 'Survey',
                                'icon' => 'fa-comments',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'Survey',
                                'action' => 'render-survey',
                                'jscallback' => 'loadResources("id_melis_survey");',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_events' => [
                            'conf' => [
                                'id' => 'id_melis_events',
                                'melisKey' => 'melis_events',
                                'name' => 'Events',
                                'icon' => 'fa-clock-o',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'Events',
                                'action' => 'render-events',
                                'jscallback' => 'initEvents();',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_contacts' => [
                            'conf' => [
                                'id' => 'id_melis_contacts',
                                'melisKey' => 'melis_contacts',
                                'name' => 'Contacts',
                                'icon' => 'fa-group',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'Contacts',
                                'action' => 'render-contacts',
                                'jscallback' => 'loadResources("id_melis_contacts");',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_maps_google' => [
                            'conf' => [
                                'id' => 'id_melis_maps_google',
                                'melisKey' => 'melis_maps_google',
                                'name' => 'Google Maps',
                                'icon' => 'fa-map',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'MapsGoogle',
                                'action' => 'render-maps-google',
                                'jscallback' => 'checkAPIMaps();',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_maps_clustering' => [
                            'conf' => [
                                'id' => 'id_melis_maps_clustering',
                                'melisKey' => 'melis_maps_clustering',
                                'name' => 'Google Maps Clustering',
                                'icon' => 'fa-map',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'MapsClustering',
                                'action' => 'render-maps-clustering',
                                'jscallback' => 'checkAPIMaps();',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_maps_extend_pagination' => [
                            'conf' => [
                                'id' => 'id_melis_maps_extend_pagination',
                                'melisKey' => 'melis_maps_extend_pagination',
                                'name' => 'Google Maps Extend',
                                'icon' => 'fa-map',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'MapsExtendPagination',
                                'action' => 'render-maps-extend-pagination',
                                'jscallback' => 'checkAPIMaps();',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_maps_filtering' => [
                            'conf' => [
                                'id' => 'id_melis_maps_filtering',
                                'melisKey' => 'melis_maps_filtering',
                                'name' => 'Google Maps Filter',
                                'icon' => 'fa-map',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'MapsFiltering',
                                'action' => 'render-maps-filtering',
                                'jscallback' => 'checkAPIMaps();',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_maps_geo_search' => [
                            'conf' => [
                                'id' => 'id_melis_maps_geo_search',
                                'melisKey' => 'melis_maps_geo_search',
                                'name' => 'Google Maps Search',
                                'icon' => 'fa-map',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'MapsGeoSearch',
                                'action' => 'render-maps-geo-search',
                                'jscallback' => 'checkAPIMaps();',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_maps_json' => [
                            'conf' => [
                                'id' => 'id_melis_maps_json',
                                'melisKey' => 'melis_maps_json',
                                'name' => 'Google Maps JSON',
                                'icon' => 'fa-map',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'MapsJSON',
                                'action' => 'render-maps-json',
                                'jscallback' => 'checkAPIMaps();',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_maps_vector' => [
                            'conf' => [
                                'id' => 'id_melis_maps_vector',
                                'melisKey' => 'melis_maps_vector',
                                'name' => 'Vector Maps',
                                'icon' => 'fa-map',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'MapsVector',
                                'action' => 'render-maps-vector',
                                'jscallback' => 'mapsVectorInit();',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_photo_gallery' => [
                            'conf' => [
                                'id' => 'id_melis_photo_gallery',
                                'melisKey' => 'melis_photo_gallery',
                                'name' => 'Photo Gallery',
                                'icon' => 'fa-photo',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'PhotoGallery',
                                'action' => 'render-photo-gallery',
                                'jscallback' => 'initPhotoGallery();',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_gallery_video' => [
                            'conf' => [
                                'id' => 'id_melis_gallery_video',
                                'melisKey' => 'melis_gallery_video',
                                'name' => 'Gallery Video',
                                'icon' => 'fa-film',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'GalleryVideo',
                                'action' => 'render-gallery-video',
                                'jscallback' => 'initGalleryVideo();',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_carousel' => [
                            'conf' => [
                                'id' => 'id_melis_carousel',
                                'melisKey' => 'melis_carousel',
                                'name' => 'Carousel',
                                'icon' => 'fa-film',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'Carousel',
                                'action' => 'render-carousel',
                                'jscallback' => 'initCarousel();',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_buttons_icons' => [
                            'conf' => [
                                'id' => 'id_melis_buttons_icons',
                                'melisKey' => 'melis_buttons_icons',
                                'name' => 'Buttons',
                                'icon' => 'fa-puzzle-piece',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'ButtonsIcons',
                                'action' => 'render-buttons-icons',
                                'jscallback' => 'initButtons();',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_icons' => [
                            'conf' => [
                                'id' => 'id_melis_icons',
                                'melisKey' => 'melis_icons',
                                'name' => 'Icons',
                                'icon' => 'fa-fonticons',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'Icons',
                                'action' => 'render-icons',
                                'jscallback' => '',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_tables' => [
                            'conf' => [
                                'id' => 'id_melis_tables',
                                'melisKey' => 'melis_tables',
                                'name' => 'Tables',
                                'icon' => 'fa-table',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'Tables',
                                'action' => 'render-tables',
                                'jscallback' => 'tablesInit();',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_tables_responsive' => [
                            'conf' => [
                                'id' => 'id_melis_tables_responsive',
                                'melisKey' => 'melis_tables_responsive',
                                'name' => 'Responsive Tables',
                                'icon' => 'fa-table',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'TablesResponsive',
                                'action' => 'render-tables-responsive',
                                'jscallback' => 'tablesResponsiveInit();',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_typography' => [
                            'conf' => [
                                'id' => 'id_melis_typography',
                                'melisKey' => 'melis_typography',
                                'name' => 'Typography',
                                'icon' => 'fa-font',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'Typography',
                                'action' => 'render-typography',
                                'jscallback' => '',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_grid' => [
                            'conf' => [
                                'id' => 'id_melis_grid',
                                'melisKey' => 'melis_grid',
                                'name' => 'Grid System',
                                'icon' => 'fa-th',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'Grid',
                                'action' => 'render-grid',
                                'jscallback' => '',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_notifications' => [
                            'conf' => [
                                'id' => 'id_melis_notifications',
                                'melisKey' => 'melis_notifications',
                                'name' => 'Alerts & Notifications',
                                'icon' => 'fa-bell',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'Notifications',
                                'action' => 'render-notifications',
                                'jscallback' => 'initNotifications();',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_modals' => [
                            'conf' => [
                                'id' => 'id_melis_modals',
                                'melisKey' => 'melis_modals',
                                'name' => 'Modals',
                                'icon' => 'fa-clone',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'Modals',
                                'action' => 'render-modals',
                                'jscallback' => 'initModals();',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_widgets' => [
                            'conf' => [
                                'id' => 'id_melis_widgets',
                                'melisKey' => 'melis_widgets',
                                'name' => 'Widgets',
                                'icon' => 'fa-puzzle-piece',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'Widgets',
                                'action' => 'render-widgets',
                                'jscallback' => 'initWidgets();',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_sliders' => [
                            'conf' => [
                                'id' => 'id_melis_sliders',
                                'melisKey' => 'melis_sliders',
                                'name' => 'Sliders',
                                'icon' => 'fa-sliders',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'Sliders',
                                'action' => 'render-sliders',
                                'jscallback' => 'initSliders();',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_timelines' => [
                            'conf' => [
                                'id' => 'id_melis_timelines',
                                'melisKey' => 'melis_timelines',
                                'name' => 'Timelines',
                                'icon' => 'fa-ellipsis-h',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'Timelines',
                                'action' => 'render-timelines',
                                'jscallback' => '',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_tabs' => [
                            'conf' => [
                                'id' => 'id_melis_tabs',
                                'melisKey' => 'melis_tabs',
                                'name' => 'Tabs',
                                'icon' => 'fa-plus-square-o',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'Tabs',
                                'action' => 'render-tabs',
                                'jscallback' => '',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_charts' => [
                            'conf' => [
                                'id' => 'id_melis_charts',
                                'melisKey' => 'melis_charts',
                                'name' => 'Charts',
                                'icon' => 'fa-area-chart',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'Charts',
                                'action' => 'render-charts',
                                'jscallback' => 'initCharts();',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_calendar' => [
                            'conf' => [
                                'id' => 'id_melis_calendar',
                                'melisKey' => 'melis_calendar',
                                'name' => 'Calendar',
                                'icon' => 'fa-calendar',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'Calendar',
                                'action' => 'render-calendar',
                                'jscallback' => 'initCalendar();',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_form_wizards' => [
                            'conf' => [
                                'id' => 'id_melis_form_wizards',
                                'melisKey' => 'melis_form_wizards',
                                'name' => 'Form Wizards',
                                'icon' => 'fa-edit',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'FormWizards',
                                'action' => 'render-form-wizards',
                                'jscallback' => 'initFormWizards();',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_form_elements' => [
                            'conf' => [
                                'id' => 'id_melis_form_elements',
                                'melisKey' => 'melis_form_elements',
                                'name' => 'Form Elements',
                                'icon' => 'fa-edit',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'FormElements',
                                'action' => 'render-form-elements',
                                'jscallback' => 'initFormElements();',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_form_validator' => [
                            'conf' => [
                                'id' => 'id_melis_form_validator',
                                'melisKey' => 'melis_form_validator',
                                'name' => 'Form Validator',
                                'icon' => 'fa-edit',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'FormValidator',
                                'action' => 'render-form-validator',
                                'jscallback' => 'initFormValidator();',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_file_manager' => [
                            'conf' => [
                                'id' => 'id_melis_file_manager',
                                'melisKey' => 'melis_file_manager',
                                'name' => 'File Manager',
                                'icon' => 'fa-edit',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'FileManager',
                                'action' => 'render-file-manager',
                                'jscallback' => 'initFileManger();',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_inbox' => [
                            'conf' => [
                                'id' => 'id_melis_inbox',
                                'melisKey' => 'melis_inbox',
                                'name' => 'Inbox',
                                'icon' => 'fa-inbox',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'Inbox',
                                'action' => 'render-inbox',
                                'jscallback' => '',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_finances' => [
                            'conf' => [
                                'id' => 'id_melis_finances',
                                'melisKey' => 'melis_finances',
                                'name' => 'Finances',
                                'icon' => 'fa-dollar',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'Finances',
                                'action' => 'render-finances',
                                'jscallback' => 'initFinances();',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_invoice' => [
                            'conf' => [
                                'id' => 'id_melis_invoice',
                                'melisKey' => 'melis_invoice',
                                'name' => 'Invoice',
                                'icon' => 'fa-file-text-o',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'Invoice',
                                'action' => 'render-invoice',
                                'jscallback' => 'initInvoice();',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_bookings' => [
                            'conf' => [
                                'id' => 'id_melis_bookings',
                                'melisKey' => 'melis_bookings',
                                'name' => 'Bookings',
                                'icon' => 'fa-book',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'Bookings',
                                'action' => 'render-bookings',
                                'jscallback' => 'initBookings();',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_medical_overview' => [
                            'conf' => [
                                'id' => 'id_melis_medical_overview',
                                'melisKey' => 'melis_medical_overview',
                                'name' => 'Medical Overview',
                                'icon' => 'fa-file-archive-o',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'MedicalOverview',
                                'action' => 'render-medical-overview',
                                'jscallback' => 'initMedicalOverview();',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_medical_patients' => [
                            'conf' => [
                                'id' => 'id_melis_medical_patients',
                                'melisKey' => 'melis_medical_patients',
                                'name' => 'Medical Patients',
                                'icon' => 'fa-group',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'MedicalPatients',
                                'action' => 'render-medical-patients',
                                'jscallback' => '',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_medical_appointments' => [
                            'conf' => [
                                'id' => 'id_melis_medical_appointments',
                                'melisKey' => 'melis_medical_appointments',
                                'name' => 'Medical Appointments',
                                'icon' => 'fa-clock-o',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'MedicalAppointments',
                                'action' => 'render-medical-appointments',
                                'jscallback' => 'initMedicalAppointments();',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_medical_memos' => [
                            'conf' => [
                                'id' => 'id_melis_medical_memos',
                                'melisKey' => 'melis_medical_memos',
                                'name' => 'Medical Memos',
                                'icon' => 'fa-file-excel-o',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'MedicalMemos',
                                'action' => 'render-medical-memos',
                                'jscallback' => '',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_medical_metrics' => [
                            'conf' => [
                                'id' => 'id_melis_medical_metrics',
                                'melisKey' => 'melis_medical_metrics',
                                'name' => 'Medical Metrics',
                                'icon' => 'fa-files-o',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'MedicalMetrics',
                                'action' => 'render-medical-metrics',
                                'jscallback' => 'initMedicalMetrics();',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_social' => [
                            'conf' => [
                                'id' => 'id_melis_social',
                                'melisKey' => 'melis_social',
                                'name' => 'Social',
                                'icon' => 'fa-user',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'Social',
                                'action' => 'render-social',
                                'jscallback' => 'initSocial();',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_shop_edit_products' => [
                            'conf' => [
                                'id' => 'id_melis_shop_edit_products',
                                'melisKey' => 'melis_shop_edit_products',
                                'name' => 'Add Product',
                                'icon' => 'fa-cart-plus',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'ShopEditProducts',
                                'action' => 'render-shop-edit-products',
                                'jscallback' => 'initShopEditProductsInit();',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_shop_products' => [
                            'conf' => [
                                'id' => 'id_melis_shop_products',
                                'melisKey' => 'melis_shop_products',
                                'name' => 'Products',
                                'icon' => 'fa-product-hunt',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'ShopProducts',
                                'action' => 'render-shop-products',
                                'jscallback' => 'initShopProductsInit();',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_login' => [
                            'conf' => [
                                'id' => 'id_melis_login',
                                'melisKey' => 'melis_login',
                                'name' => 'Login',
                                'icon' => 'fa-lock',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'Login',
                                'action' => 'render-login',
                                'jscallback' => '',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_signup' => [
                            'conf' => [
                                'id' => 'id_melis_signup',
                                'melisKey' => 'melis_signup',
                                'name' => 'Signup',
                                'icon' => 'fa-pencil',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'Signup',
                                'action' => 'render-signup',
                                'jscallback' => '',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_my_account' => [
                            'conf' => [
                                'id' => 'id_melis_my_account',
                                'melisKey' => 'melis_my_account',
                                'name' => 'Edit Account',
                                'icon' => 'fa-edit',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'MyAccount',
                                'action' => 'render-my-account',
                                'jscallback' => 'initMyAccountInit();',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_ratings' => [
                            'conf' => [
                                'id' => 'id_melis_ratings',
                                'melisKey' => 'melis_ratings',
                                'name' => 'Ratings',
                                'icon' => 'fa-star',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'Ratings',
                                'action' => 'render-ratings',
                                'jscallback' => 'initRatings();',
                                'jsdatas' => []
                            ],
                        ],
                        'melis_error' => [
                            'conf' => [
                                'id' => 'id_melis_error',
                                'melisKey' => 'melis_error',
                                'name' => 'Error',
                                'icon' => 'fa-wrench',
                                'rightsDisplay' => 'none',
                            ],
                            'forward' => [
                                'module' => 'MelisDesign',
                                'controller' => 'Error',
                                'action' => 'render-error',
                                'jscallback' => '',
                                'jsdatas' => []
                            ],
                        ],
                    ],
                ],
            ],
        ],
    ],
];
