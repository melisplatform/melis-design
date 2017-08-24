<?php 

return array(
    'plugins' => array(
        'meliscore' => array(
            'datas' => array(),
            'interface' => array(
                'meliscore_leftmenu' => array(
                    'interface' => array(
                        'meliscore_toolstree' => array(
                            'interface' => array(
                                'melisdesign_leftnemu' =>  array(
                                    'conf' => array(
                                        'type' => 'melisdesign/interface/melisdesign_cof'
                                    ),
                                ),

                            ),
                        ),
                    ),
                ),
            ),
            'ressources' => array(
                'js' => array(
                    )

                ),
        ),

        'melisdesign' => array(
            'conf' => array(
                'id' => '',
                'name' => 'tr_melistooldesign_title',
                'rightsDisplay' => 'none',
            ),
            'ressources' => array(
                'css' => array(
                    'MelisDesign/css/design-tool.css',
                ),
                'js' => array(
                    '/MelisDesign/js/melis-design.concat-plugins.js',
                    '/MelisDesign/js/melis-design.concat-init.js',
                ),
            ),
            'datas' => '',
            'interface' => array(

                'melisdesign_cof' => array(
                    'conf' => array(
                        'id' => 'id_medesign_leftnemu',
                        'melisKey' => 'id_medesign_leftnemu_leftnemu',
                        'name' => 'tr_melistooldesign_title',
                        'icon' => 'fa-paint-brush',
                    ),
                    'interface' => array(
                        'melis_design_dashboard' => array(
                            'conf' => array(
                                'type' => 'melis_dashboard'
                            ),
                        ),
                        'melis_design_profile_resume' => array(
                            'conf' => array(
                                'type' => 'melis_profile_resume'
                            ),
                        ),
                        'melis_design_portfolio' => array(
                            'conf' => array(
                                'type' => 'melis_portfolio'
                            ),
                        ),
                        'melis_design_support_tickets' => array(
                            'conf' => array(
                                'type' => 'melis_support_tickets'
                            ),
                        ),
                        'melis_design_support_forum_overview' => array(
                            'conf' => array(
                                'type' => 'melis_support_forum_overview'
                            ),
                        ),
                        'melis_design_support_forum_post' => array(
                            'conf' => array(
                                'type' => 'melis_support_forum_post'
                            ),
                        ),
                        'melis_design_support_questions' => array(
                            'conf' => array(
                                'type' => 'melis_support_questions'
                            ),
                        ),
                        'melis_design_support_answers' => array(
                            'conf' => array(
                                'type' => 'melis_support_answers'
                            ),
                        ),
                        'melis_design_support_knowledge' => array(
                            'conf' => array(
                                'type' => 'melis_support_knowledge'
                            ),
                        ),
                        'melis_design_pricing_tables' => array(
                            'conf' => array(
                                'type' => 'melis_pricing_tables'
                            ),
                        ),
                        'melis_design_survey' => array(
                            'conf' => array(
                                'type' => 'melis_survey'
                            ),
                        ),
                        'melis_design_events' => array(
                            'conf' => array(
                                'type' => 'melis_events'
                            ),
                        ),
                        'melis_design_contacts' => array(
                            'conf' => array(
                                'type' => 'melis_contacts'
                            ),
                        ),
                        'melis_design_maps_google' => array(
                            'conf' => array(
                                'type' => 'melis_maps_google'
                            ),
                        ),
                        'melis_design_maps_clustering' => array(
                            'conf' => array(
                                'type' => 'melis_maps_clustering'
                            ),
                        ),
                        'melis_design_maps_extend_pagination' => array(
                            'conf' => array(
                                'type' => 'melis_maps_extend_pagination'
                            ),
                        ),
                        'melis_design_maps_filtering' => array(
                            'conf' => array(
                                'type' => 'melis_maps_filtering'
                            ),
                        ),
                        'melis_design_maps_geo_search' => array(
                            'conf' => array(
                                'type' => 'melis_maps_geo_search'
                            ),
                        ),
                        'melis_design_maps_json' => array(
                            'conf' => array(
                                'type' => 'melis_maps_json'
                            ),
                        ),
                        'melis_design_maps_vector' => array(
                            'conf' => array(
                                'type' => 'melis_maps_vector'
                            ),
                        ),
                        'melis_design_photo_gallery' => array(
                            'conf' => array(
                                'type' => 'melis_photo_gallery'
                            ),
                        ),
                        'melis_design_gallery_video' => array(
                            'conf' => array(
                                'type' => 'melis_gallery_video'
                            ),
                        ),
                        'melis_design_carousel' => array(
                            'conf' => array(
                                'type' => 'melis_carousel'
                            ),
                        ),
                        'melis_design_buttons_icons' => array(
                            'conf' => array(
                                'type' => 'melis_buttons_icons'
                            ),
                        ),
                        'melis_design_icons' => array(
                            'conf' => array(
                                'type' => 'melis_icons'
                            ),
                        ),
                        'melis_design_tables' => array(
                            'conf' => array(
                                'type' => 'melis_tables'
                            ),
                        ),
                        'melis_design_tables_responsive' => array(
                            'conf' => array(
                                'type' => 'melis_tables_responsive'
                            ),
                        ),
                        'melis_design_typography' => array(
                            'conf' => array(
                                'type' => 'melis_typography'
                            ),
                        ),
                        'melis_design_grid' => array(
                            'conf' => array(
                                'type' => 'melis_grid'
                            ),
                        ),
                        'melis_design_notifications' => array(
                            'conf' => array(
                                'type' => 'melis_notifications'
                            ),
                        ),
                        'melis_design_modals' => array(
                            'conf' => array(
                                'type' => 'melis_modals'
                            ),
                        ),
                        'melis_design_widgets' => array(
                            'conf' => array(
                                'type' => 'melis_widgets'
                            ),
                        ),
                        'melis_design_sliders' => array(
                            'conf' => array(
                                'type' => 'melis_sliders'
                            ),
                        ),
                        'melis_design_timelines' => array(
                            'conf' => array(
                                'type' => 'melis_timelines'
                            ),
                        ),
                        'melis_design_tabs' => array(
                            'conf' => array(
                                'type' => 'melis_tabs'
                            ),
                        ),
                        'melis_design_charts' => array(
                            'conf' => array(
                                'type' => 'melis_charts'
                            ),
                        ),
                        'melis_design_calendar' => array(
                            'conf' => array(
                                'type' => 'melis_calendar'
                            ),
                        ),
                        'melis_design_form_wizards' => array(
                            'conf' => array(
                                'type' => 'melis_form_wizards'
                            ),
                        ),
                        'melis_design_form_elements' => array(
                            'conf' => array(
                                'type' => 'melis_form_elements'
                            ),
                        ),
                        'melis_design_form_validator' => array(
                            'conf' => array(
                                'type' => 'melis_form_validator'
                            ),
                        ),
                        'melis_design_file_manager' => array(
                            'conf' => array(
                                'type' => 'melis_file_manager'
                            ),
                        ),
                        'melis_design_inbox' => array(
                            'conf' => array(
                                'type' => 'melis_inbox'
                            ),
                        ),
                        'melis_design_finances' => array(
                            'conf' => array(
                                'type' => 'melis_finances'
                            ),
                        ),
                        'melis_design_invoice' => array(
                            'conf' => array(
                                'type' => 'melis_invoice'
                            ),
                        ),
                        'melis_design_bookings' => array(
                            'conf' => array(
                                'type' => 'melis_bookings'
                            ),
                        ),
                        'melis_design_medical_overview' => array(
                            'conf' => array(
                                'type' => 'melis_medical_overview'
                            ),
                        ),
                        'melis_design_medical_overview' => array(
                            'conf' => array(
                                'type' => 'melis_medical_overview'
                            ),
                        ),
                        'melis_design_medical_patients' => array(
                            'conf' => array(
                                'type' => 'melis_medical_patients'
                            ),
                        ),
                        'melis_design_medical_appointments' => array(
                            'conf' => array(
                                'type' => 'melis_medical_appointments'
                            ),
                        ),
                        'melis_design_medical_memos' => array(
                            'conf' => array(
                                'type' => 'melis_medical_memos'
                            ),
                        ),
                        'melis_design_medical_metrics' => array(
                            'conf' => array(
                                'type' => 'melis_medical_metrics'
                            ),
                        ),
                        'melis_design_social' => array(
                            'conf' => array(
                                'type' => 'melis_social'
                            ),
                        ),
                        'melis_design_shop_edit_products' => array(
                            'conf' => array(
                                'type' => 'melis_shop_edit_products'
                            ),
                        ),
                        'melis_design_shop_products' => array(
                            'conf' => array(
                                'type' => 'melis_shop_products'
                            ),
                        ),
                        'melis_design_login' => array(
                            'conf' => array(
                                'type' => 'melis_login'
                            ),
                        ),
                        'melis_design_signup' => array(
                            'conf' => array(
                                'type' => 'melis_signup'
                            ),
                        ),
                        'melis_design_my_account' => array(
                            'conf' => array(
                                'type' => 'melis_my_account'
                            ),
                        ),
                        'melis_design_ratings' => array(
                            'conf' => array(
                                'type' => 'melis_ratings'
                            ),
                        ),
                        'melis_design_error' => array(
                            'conf' => array(
                                'type' => 'melis_error'
                            ),
                        ),
                    ),
                ),
            ),
        ),

        'melis_dashboard' => array(
            'conf' => array(
                'id' => 'id_melis_dashboard',
                'melisKey' => 'melis_dashboard',
                'name' => 'Dashboard',
                'icon' => 'fa-tachometer',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'Dashboard',
                'action' => 'render-dashboard',
                'jscallback' => 'initDashboard();',
                'jsdatas' => array()
            ),
        ),
        'melis_profile_resume' => array(
            'conf' => array(
                'id' => 'id_melis_profile_resume',
                'melisKey' => 'melis_profile_resume',
                'name' => 'Profile / Resume',
                'icon' => 'fa-user',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'ProfileResume',
                'action' => 'render-profile-resume',
                'jscallback' => '',
                'jsdatas' => array()
            ),
        ),
        'melis_portfolio' => array(
            'conf' => array(
                'id' => 'id_melis_portfolio',
                'melisKey' => 'melis_portfolio',
                'name' => 'Portfolio',
                'icon' => 'fa-user-secret',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'Portfolio',
                'action' => 'render-portfolio',
                'jscallback' => 'initPortfolio();',
                'jsdatas' => array()
            ),
        ),
        'melis_support_tickets' => array(
            'conf' => array(
                'id' => 'id_melis_support_tickets',
                'melisKey' => 'melis_support_tickets',
                'name' => 'Support Tickets',
                'icon' => 'fa-ticket',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'SupportTickets',
                'action' => 'render-support-tickets',
                'jscallback' => 'initSupportTickets();',
                'jsdatas' => array()
            ),
        ),
        'melis_support_forum_overview' => array(
            'conf' => array(
                'id' => 'id_melis_support_forum_overview',
                'melisKey' => 'melis_support_forum_overview',
                'name' => 'Forum Overview',
                'icon' => 'fa-list',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'SupportForumOverview',
                'action' => 'render-support-forum-overview',
                'jscallback' => '',
                'jsdatas' => array()
            ),
        ),
        'melis_support_forum_post' => array(
            'conf' => array(
                'id' => 'id_melis_support_forum_post',
                'melisKey' => 'melis_support_forum_post',
                'name' => 'Forum Post',
                'icon' => 'fa-newspaper-o',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'SupportForumPost',
                'action' => 'render-support-forum-post',
                'jscallback' => '',
                'jsdatas' => array()
            ),
        ),
        'melis_support_questions' => array(
            'conf' => array(
                'id' => 'id_melis_support_questions',
                'melisKey' => 'melis_support_questions',
                'name' => 'Q&A Listing',
                'icon' => 'fa-question-circle',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'SupportQuestions',
                'action' => 'render-support-questions',
                'jscallback' => 'initSupportQuestions();',
                'jsdatas' => array()
            ),
        ),
        'melis_support_answers' => array(
            'conf' => array(
                'id' => 'id_melis_support_answers',
                'melisKey' => 'melis_support_answers',
                'name' => 'Q&A Page',
                'icon' => 'fa-list-alt',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'SupportAnswers',
                'action' => 'render-support-answers',
                'jscallback' => 'initSupportAnswers();',
                'jsdatas' => array()
            ),
        ),
        'melis_support_knowledge' => array(
            'conf' => array(
                'id' => 'id_melis_support_knowledge',
                'melisKey' => 'melis_support_knowledge',
                'name' => 'Knowledge Base',
                'icon' => 'fa-search-plus',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'SupportKnowledge',
                'action' => 'render-support-knowledge',
                'jscallback' => '',
                'jsdatas' => array()
            ),
        ),
        'melis_pricing_tables' => array(
            'conf' => array(
                'id' => 'id_melis_pricing_tables',
                'melisKey' => 'melis_pricing_tables',
                'name' => 'Pricing Tables',
                'icon' => 'fa-dollar',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'PricingTables',
                'action' => 'render-pricing-tables',
                'jscallback' => '',
                'jsdatas' => array()
            ),
        ),
        'melis_survey' => array(
            'conf' => array(
                'id' => 'id_melis_survey',
                'melisKey' => 'melis_survey',
                'name' => 'Survey',
                'icon' => 'fa-comments',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'Survey',
                'action' => 'render-survey',
                'jscallback' => 'loadResources("id_melis_survey");',
                'jsdatas' => array()
            ),
        ),
        'melis_events' => array(
            'conf' => array(
                'id' => 'id_melis_events',
                'melisKey' => 'melis_events',
                'name' => 'Events',
                'icon' => 'fa-clock-o',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'Events',
                'action' => 'render-events',
                'jscallback' => 'initEvents();',
                'jsdatas' => array()
            ),
        ),
        'melis_contacts' => array(
            'conf' => array(
                'id' => 'id_melis_contacts',
                'melisKey' => 'melis_contacts',
                'name' => 'Contacts',
                'icon' => 'fa-group',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'Contacts',
                'action' => 'render-contacts',
                'jscallback' => 'loadResources("id_melis_contacts");',
                'jsdatas' => array()
            ),
        ),
        'melis_maps_google' => array(
            'conf' => array(
                'id' => 'id_melis_maps_google',
                'melisKey' => 'melis_maps_google',
                'name' => 'Google Maps',
                'icon' => 'fa-map',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'MapsGoogle',
                'action' => 'render-maps-google',
                'jscallback' => 'checkAPIMaps();',
                'jsdatas' => array()
            ),
        ),
        'melis_maps_clustering' => array(
            'conf' => array(
                'id' => 'id_melis_maps_clustering',
                'melisKey' => 'melis_maps_clustering',
                'name' => 'Google Maps Clustering',
                'icon' => 'fa-map',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'MapsClustering',
                'action' => 'render-maps-clustering',
                'jscallback' => 'checkAPIMaps();',
                'jsdatas' => array()
            ),
        ),
        'melis_maps_extend_pagination' => array(
            'conf' => array(
                'id' => 'id_melis_maps_extend_pagination',
                'melisKey' => 'melis_maps_extend_pagination',
                'name' => 'Google Maps Extend',
                'icon' => 'fa-map',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'MapsExtendPagination',
                'action' => 'render-maps-extend-pagination',
                'jscallback' => 'checkAPIMaps();',
                'jsdatas' => array()
            ),
        ),
        'melis_maps_filtering' => array(
            'conf' => array(
                'id' => 'id_melis_maps_filtering',
                'melisKey' => 'melis_maps_filtering',
                'name' => 'Google Maps Filter',
                'icon' => 'fa-map',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'MapsFiltering',
                'action' => 'render-maps-filtering',
                'jscallback' => 'checkAPIMaps();',
                'jsdatas' => array()
            ),
        ),
        'melis_maps_geo_search' => array(
            'conf' => array(
                'id' => 'id_melis_maps_geo_search',
                'melisKey' => 'melis_maps_geo_search',
                'name' => 'Google Maps Search',
                'icon' => 'fa-map',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'MapsGeoSearch',
                'action' => 'render-maps-geo-search',
                'jscallback' => 'checkAPIMaps();',
                'jsdatas' => array()
            ),
        ),
        'melis_maps_json' => array(
            'conf' => array(
                'id' => 'id_melis_maps_json',
                'melisKey' => 'melis_maps_json',
                'name' => 'Google Maps JSON',
                'icon' => 'fa-map',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'MapsJSON',
                'action' => 'render-maps-json',
                'jscallback' => 'checkAPIMaps();',
                'jsdatas' => array()
            ),
        ),
        'melis_maps_vector' => array(
            'conf' => array(
                'id' => 'id_melis_maps_vector',
                'melisKey' => 'melis_maps_vector',
                'name' => 'Vector Maps',
                'icon' => 'fa-map',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'MapsVector',
                'action' => 'render-maps-vector',
                'jscallback' => 'mapsVectorInit();',
                'jsdatas' => array()
            ),
        ),

        'melis_photo_gallery' => array(
            'conf' => array(
                'id' => 'id_melis_photo_gallery',
                'melisKey' => 'melis_photo_gallery',
                'name' => 'Photo Gallery',
                'icon' => 'fa-photo',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'PhotoGallery',
                'action' => 'render-photo-gallery',
                'jscallback' => 'initPhotoGallery();',
                'jsdatas' => array()
            ),
        ),
        'melis_gallery_video' => array(
            'conf' => array(
                'id' => 'id_melis_gallery_video',
                'melisKey' => 'melis_gallery_video',
                'name' => 'Gallery Video',
                'icon' => 'fa-film',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'GalleryVideo',
                'action' => 'render-gallery-video',
                'jscallback' => 'initGalleryVideo();',
                'jsdatas' => array()
            ),
        ),
        'melis_carousel' => array(
            'conf' => array(
                'id' => 'id_melis_carousel',
                'melisKey' => 'melis_carousel',
                'name' => 'Carousel',
                'icon' => 'fa-film',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'Carousel',
                'action' => 'render-carousel',
                'jscallback' => 'initCarousel();',
                'jsdatas' => array()
            ),
        ),
        'melis_buttons_icons' => array(
            'conf' => array(
                'id' => 'id_melis_buttons_icons',
                'melisKey' => 'melis_buttons_icons',
                'name' => 'Buttons',
                'icon' => 'fa-puzzle-piece',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'ButtonsIcons',
                'action' => 'render-buttons-icons',
                'jscallback' => 'initButtons();',
                'jsdatas' => array()
            ),
        ),
        'melis_icons' => array(
            'conf' => array(
                'id' => 'id_melis_icons',
                'melisKey' => 'melis_icons',
                'name' => 'Icons',
                'icon' => 'fa-fonticons',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'Icons',
                'action' => 'render-icons',
                'jscallback' => '',
                'jsdatas' => array()
            ),
        ),
        'melis_tables' => array(
            'conf' => array(
                'id' => 'id_melis_tables',
                'melisKey' => 'melis_tables',
                'name' => 'Tables',
                'icon' => 'fa-table',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'Tables',
                'action' => 'render-tables',
                'jscallback' => 'tablesInit();',
                'jsdatas' => array()
            ),
        ),
        'melis_tables_responsive' => array(
            'conf' => array(
                'id' => 'id_melis_tables_responsive',
                'melisKey' => 'melis_tables_responsive',
                'name' => 'Responsive Tables',
                'icon' => 'fa-table',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'TablesResponsive',
                'action' => 'render-tables-responsive',
                'jscallback' => 'tablesResponsiveInit();',
                'jsdatas' => array()
            ),
        ),
        'melis_typography' => array(
            'conf' => array(
                'id' => 'id_melis_typography',
                'melisKey' => 'melis_typography',
                'name' => 'Typography',
                'icon' => 'fa-font',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'Typography',
                'action' => 'render-typography',
                'jscallback' => '',
                'jsdatas' => array()
            ),
        ),
        'melis_grid' => array(
            'conf' => array(
                'id' => 'id_melis_grid',
                'melisKey' => 'melis_grid',
                'name' => 'Grid System',
                'icon' => 'fa-th',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'Grid',
                'action' => 'render-grid',
                'jscallback' => '',
                'jsdatas' => array()
            ),
        ),
        'melis_notifications' => array(
            'conf' => array(
                'id' => 'id_melis_notifications',
                'melisKey' => 'melis_notifications',
                'name' => 'Alerts & Notifications',
                'icon' => 'fa-bell',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'Notifications',
                'action' => 'render-notifications',
                'jscallback' => 'initNotifications();',
                'jsdatas' => array()
            ),
        ),
        'melis_modals' => array(
            'conf' => array(
                'id' => 'id_melis_modals',
                'melisKey' => 'melis_modals',
                'name' => 'Modals',
                'icon' => 'fa-clone',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'Modals',
                'action' => 'render-modals',
                'jscallback' => 'initModals();',
                'jsdatas' => array()
            ),
        ),
        'melis_widgets' => array(
            'conf' => array(
                'id' => 'id_melis_widgets',
                'melisKey' => 'melis_widgets',
                'name' => 'Widgets',
                'icon' => 'fa-puzzle-piece',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'Widgets',
                'action' => 'render-widgets',
                'jscallback' => 'initWidgets();',
                'jsdatas' => array()
            ),
        ),
        'melis_sliders' => array(
            'conf' => array(
                'id' => 'id_melis_sliders',
                'melisKey' => 'melis_sliders',
                'name' => 'Sliders',
                'icon' => 'fa-sliders',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'Sliders',
                'action' => 'render-sliders',
                'jscallback' => 'initSliders();',
                'jsdatas' => array()
            ),
        ),
        'melis_timelines' => array(
            'conf' => array(
                'id' => 'id_melis_timelines',
                'melisKey' => 'melis_timelines',
                'name' => 'Timelines',
                'icon' => 'fa-ellipsis-h',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'Timelines',
                'action' => 'render-timelines',
                'jscallback' => '',
                'jsdatas' => array()
            ),
        ),
        'melis_tabs' => array(
            'conf' => array(
                'id' => 'id_melis_tabs',
                'melisKey' => 'melis_tabs',
                'name' => 'Tabs',
                'icon' => 'fa-plus-square-o',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'Tabs',
                'action' => 'render-tabs',
                'jscallback' => '',
                'jsdatas' => array()
            ),
        ),
        'melis_charts' => array(
            'conf' => array(
                'id' => 'id_melis_charts',
                'melisKey' => 'melis_charts',
                'name' => 'Charts',
                'icon' => 'fa-area-chart',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'Charts',
                'action' => 'render-charts',
                'jscallback' => 'initCharts();',
                'jsdatas' => array()
            ),
        ),
        'melis_calendar' => array(
            'conf' => array(
                'id' => 'id_melis_calendar',
                'melisKey' => 'melis_calendar',
                'name' => 'Calendar',
                'icon' => 'fa-calendar',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'Calendar',
                'action' => 'render-calendar',
                'jscallback' => 'initCalendar();',
                'jsdatas' => array()
            ),
        ),
        'melis_form_wizards' => array(
            'conf' => array(
                'id' => 'id_melis_form_wizards',
                'melisKey' => 'melis_form_wizards',
                'name' => 'Form Wizards',
                'icon' => 'fa-edit',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'FormWizards',
                'action' => 'render-form-wizards',
                'jscallback' => 'initFormWizards();',
                'jsdatas' => array()
            ),
        ),
        'melis_form_elements' => array(
            'conf' => array(
                'id' => 'id_melis_form_elements',
                'melisKey' => 'melis_form_elements',
                'name' => 'Form Elements',
                'icon' => 'fa-edit',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'FormElements',
                'action' => 'render-form-elements',
                'jscallback' => 'initFormElements();',
                'jsdatas' => array()
            ),
        ),
        'melis_form_validator' => array(
            'conf' => array(
                'id' => 'id_melis_form_validator',
                'melisKey' => 'melis_form_validator',
                'name' => 'Form Validator',
                'icon' => 'fa-edit',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'FormValidator',
                'action' => 'render-form-validator',
                'jscallback' => 'initFormValidator();',
                'jsdatas' => array()
            ),
        ),
        'melis_file_manager' => array(
            'conf' => array(
                'id' => 'id_melis_file_manager',
                'melisKey' => 'melis_file_manager',
                'name' => 'File Manager',
                'icon' => 'fa-edit',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'FileManager',
                'action' => 'render-file-manager',
                'jscallback' => 'initFileManger();',
                'jsdatas' => array()
            ),
        ),
        'melis_inbox' => array(
            'conf' => array(
                'id' => 'id_melis_inbox',
                'melisKey' => 'melis_inbox',
                'name' => 'Inbox',
                'icon' => 'fa-inbox',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'Inbox',
                'action' => 'render-inbox',
                'jscallback' => '',
                'jsdatas' => array()
            ),
        ),
        'melis_finances' => array(
            'conf' => array(
                'id' => 'id_melis_finances',
                'melisKey' => 'melis_finances',
                'name' => 'Finances',
                'icon' => 'fa-dollar',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'Finances',
                'action' => 'render-finances',
                'jscallback' => 'initFinances();',
                'jsdatas' => array()
            ),
        ),
        'melis_invoice' => array(
            'conf' => array(
                'id' => 'id_melis_invoice',
                'melisKey' => 'melis_invoice',
                'name' => 'Invoice',
                'icon' => 'fa-file-text-o',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'Invoice',
                'action' => 'render-invoice',
                'jscallback' => 'initInvoice();',
                'jsdatas' => array()
            ),
        ),
        'melis_bookings' => array(
            'conf' => array(
                'id' => 'id_melis_bookings',
                'melisKey' => 'melis_bookings',
                'name' => 'Bookings',
                'icon' => 'fa-book',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'Bookings',
                'action' => 'render-bookings',
                'jscallback' => 'initBookings();',
                'jsdatas' => array()
            ),
        ),
        'melis_medical_overview' => array(
            'conf' => array(
                'id' => 'id_melis_medical_overview',
                'melisKey' => 'melis_medical_overview',
                'name' => 'Medical Overview',
                'icon' => 'fa-file-archive-o',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'MedicalOverview',
                'action' => 'render-medical-overview',
                'jscallback' => 'initMedicalOverview();',
                'jsdatas' => array()
            ),
        ),
        'melis_medical_patients' => array(
            'conf' => array(
                'id' => 'id_melis_medical_patients',
                'melisKey' => 'melis_medical_patients',
                'name' => 'Medical Patients',
                'icon' => 'fa-group',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'MedicalPatients',
                'action' => 'render-medical-patients',
                'jscallback' => '',
                'jsdatas' => array()
            ),
        ),
        'melis_medical_appointments' => array(
            'conf' => array(
                'id' => 'id_melis_medical_appointments',
                'melisKey' => 'melis_medical_appointments',
                'name' => 'Medical Appointments',
                'icon' => 'fa-clock-o',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'MedicalAppointments',
                'action' => 'render-medical-appointments',
                'jscallback' => 'initMedicalAppointments();',
                'jsdatas' => array()
            ),
        ),
        'melis_medical_memos' => array(
            'conf' => array(
                'id' => 'id_melis_medical_memos',
                'melisKey' => 'melis_medical_memos',
                'name' => 'Medical Memos',
                'icon' => 'fa-file-excel-o',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'MedicalMemos',
                'action' => 'render-medical-memos',
                'jscallback' => '',
                'jsdatas' => array()
            ),
        ),
        'melis_medical_metrics' => array(
            'conf' => array(
                'id' => 'id_melis_medical_metrics',
                'melisKey' => 'melis_medical_metrics',
                'name' => 'Medical Metrics',
                'icon' => 'fa-files-o',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'MedicalMetrics',
                'action' => 'render-medical-metrics',
                'jscallback' => 'initMedicalMetrics();',
                'jsdatas' => array()
            ),
        ),
        'melis_social' => array(
            'conf' => array(
                'id' => 'id_melis_social',
                'melisKey' => 'melis_social',
                'name' => 'Social',
                'icon' => 'fa-user',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'Social',
                'action' => 'render-social',
                'jscallback' => 'initSocial();',
                'jsdatas' => array()
            ),
        ),
        'melis_shop_edit_products' => array(
            'conf' => array(
                'id' => 'id_melis_shop_edit_products',
                'melisKey' => 'melis_shop_edit_products',
                'name' => 'Add Product',
                'icon' => 'fa-cart-plus',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'ShopEditProducts',
                'action' => 'render-shop-edit-products',
                'jscallback' => 'initShopEditProductsInit();',
                'jsdatas' => array()
            ),
        ),
        'melis_shop_products' => array(
            'conf' => array(
                'id' => 'id_melis_shop_products',
                'melisKey' => 'melis_shop_products',
                'name' => 'Products',
                'icon' => 'fa-product-hunt',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'ShopProducts',
                'action' => 'render-shop-products',
                'jscallback' => 'initShopProductsInit();',
                'jsdatas' => array()
            ),
        ),
        'melis_login' => array(
            'conf' => array(
                'id' => 'id_melis_login',
                'melisKey' => 'melis_login',
                'name' => 'Login',
                'icon' => 'fa-lock',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'Login',
                'action' => 'render-login',
                'jscallback' => '',
                'jsdatas' => array()
            ),
        ),
        'melis_signup' => array(
            'conf' => array(
                'id' => 'id_melis_signup',
                'melisKey' => 'melis_signup',
                'name' => 'Signup',
                'icon' => 'fa-pencil',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'Signup',
                'action' => 'render-signup',
                'jscallback' => '',
                'jsdatas' => array()
            ),
        ),
        'melis_my_account' => array(
            'conf' => array(
                'id' => 'id_melis_my_account',
                'melisKey' => 'melis_my_account',
                'name' => 'Edit Account',
                'icon' => 'fa-edit',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'MyAccount',
                'action' => 'render-my-account',
                'jscallback' => 'initMyAccountInit();',
                'jsdatas' => array()
            ),
        ),
        'melis_ratings' => array(
            'conf' => array(
                'id' => 'id_melis_ratings',
                'melisKey' => 'melis_ratings',
                'name' => 'Ratings',
                'icon' => 'fa-star',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'Ratings',
                'action' => 'render-ratings',
                'jscallback' => 'initRatings();',
                'jsdatas' => array()
            ),
        ),
        'melis_error' => array(
            'conf' => array(
                'id' => 'id_melis_error',
                'melisKey' => 'melis_error',
                'name' => 'Error',
                'icon' => '',
            ),

            'forward' => array(
                'module' => 'MelisDesign',
                'controller' => 'Error',
                'action' => 'render-error',
                'jscallback' => '',
                'jsdatas' => array()
            ),
        ),
    ),
);