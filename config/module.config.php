<?php

/**
 * Melis Technology (http://www.melistechnology.com)
 *
 * @copyright Copyright (c) 2015 Melis Technology (http://www.melistechnology.com)
 *
 */

return array(
    'router' => array(
        'routes' => array(
            'melis-backoffice' => array(
                'child_routes' => array(
                    'application-MelisDesign' => array(
                        'type'    => 'Literal',
                        'options' => array(
                            'route'    => 'MelisDesign',
                            'defaults' => array(
                                '__NAMESPACE__' => 'MelisDesign\Controller',
                                'controller'    => 'Index',
                                'action'        => 'index',
                            ),
                        ),
                        'may_terminate' => true,
                        'child_routes' => array(
                            'default' => array(
                                'type'    => 'Segment',
                                'options' => array(
                                    'route'    => '/[:controller[/:action]]',
                                    'constraints' => array(
                                        'controller' => '[a-zA-Z][a-zA-Z0-9_-]*',
                                        'action'     => '[a-zA-Z][a-zA-Z0-9_-]*',
                                    ),
                                    'defaults' => array(
                                    ),
                                ),
                            ),
                        ),
                    ),
                ),    
            ),
        ),
    ),
    'translator' => array(
        'locale' => 'en_EN',
    ),

    'controllers' => array(
        'invokables' => array(
            'MelisDesign\Controller\Design' => 'MelisDesign\Controller\DesignController',
            'MelisDesign\Controller\DesignSidebar' => 'MelisDesign\Controller\DesignSidebarController',
            'MelisDesign\Controller\Dashboard' => 'MelisDesign\Controller\DashboardController',
            'MelisDesign\Controller\ProfileResume' => 'MelisDesign\Controller\ProfileResumeController',
            'MelisDesign\Controller\Portfolio' => 'MelisDesign\Controller\PortfolioController',
            'MelisDesign\Controller\PricingTables' => 'MelisDesign\Controller\PricingTablesController',
            'MelisDesign\Controller\Survey' => 'MelisDesign\Controller\SurveyController',
            'MelisDesign\Controller\Events' => 'MelisDesign\Controller\EventsController',
            'MelisDesign\Controller\Contacts' => 'MelisDesign\Controller\ContactsController',
            'MelisDesign\Controller\SupportTickets' => 'MelisDesign\Controller\SupportTicketsController',
            'MelisDesign\Controller\SupportForumOverview' => 'MelisDesign\Controller\SupportForumOverviewController',
            'MelisDesign\Controller\SupportForumPost' => 'MelisDesign\Controller\SupportForumPostController',
            'MelisDesign\Controller\SupportQuestions' => 'MelisDesign\Controller\SupportQuestionsController',
            'MelisDesign\Controller\SupportAnswers' => 'MelisDesign\Controller\SupportAnswersController',
            'MelisDesign\Controller\SupportKnowledge' => 'MelisDesign\Controller\SupportKnowledgeController',
            'MelisDesign\Controller\MapsGoogle' => 'MelisDesign\Controller\MapsGoogleController',
            'MelisDesign\Controller\MapsClustering' => 'MelisDesign\Controller\MapsClusteringController',
            'MelisDesign\Controller\MapsExtendPagination' => 'MelisDesign\Controller\MapsExtendPaginationController',
            'MelisDesign\Controller\MapsFiltering' => 'MelisDesign\Controller\MapsFilteringController',
            'MelisDesign\Controller\MapsGeoSearch' => 'MelisDesign\Controller\MapsGeoSearchController',
            'MelisDesign\Controller\MapsJSON' => 'MelisDesign\Controller\MapsJSONController',
            'MelisDesign\Controller\MapsVector' => 'MelisDesign\Controller\MapsVectorController',
            'MelisDesign\Controller\PhotoGallery' => 'MelisDesign\Controller\PhotoGalleryController',
            'MelisDesign\Controller\GalleryVideo' => 'MelisDesign\Controller\GalleryVideoController',
            'MelisDesign\Controller\Carousel' => 'MelisDesign\Controller\CarouselController',
            'MelisDesign\Controller\ButtonsIcons' => 'MelisDesign\Controller\ButtonsIconsController',
            'MelisDesign\Controller\Icons' => 'MelisDesign\Controller\IconsController',
            'MelisDesign\Controller\Tables' => 'MelisDesign\Controller\TablesController',
            'MelisDesign\Controller\TablesResponsive' => 'MelisDesign\Controller\TablesResponsiveController',
            'MelisDesign\Controller\Typography' => 'MelisDesign\Controller\TypographyController',
            'MelisDesign\Controller\Grid' => 'MelisDesign\Controller\GridController',
            'MelisDesign\Controller\Notifications' => 'MelisDesign\Controller\NotificationsController',
            'MelisDesign\Controller\Modals' => 'MelisDesign\Controller\ModalsController',
            'MelisDesign\Controller\Widgets' => 'MelisDesign\Controller\WidgetsController',
            'MelisDesign\Controller\Sliders' => 'MelisDesign\Controller\SlidersController',
            'MelisDesign\Controller\Timelines' => 'MelisDesign\Controller\TimelinesController',
            'MelisDesign\Controller\Tabs' => 'MelisDesign\Controller\TabsController',
            'MelisDesign\Controller\Charts' => 'MelisDesign\Controller\ChartsController',
            'MelisDesign\Controller\Calendar' => 'MelisDesign\Controller\CalendarController',
            'MelisDesign\Controller\FormWizards' => 'MelisDesign\Controller\FormWizardsController',
            'MelisDesign\Controller\FormElements' => 'MelisDesign\Controller\FormElementsController',
            'MelisDesign\Controller\FormValidator' => 'MelisDesign\Controller\FormValidatorController',
            'MelisDesign\Controller\FileManager' => 'MelisDesign\Controller\FileManagerController',
            'MelisDesign\Controller\Inbox' => 'MelisDesign\Controller\InboxController',
            'MelisDesign\Controller\Finances' => 'MelisDesign\Controller\FinancesController',
            'MelisDesign\Controller\Invoice' => 'MelisDesign\Controller\InvoiceController',
            'MelisDesign\Controller\Bookings' => 'MelisDesign\Controller\BookingsController',
            'MelisDesign\Controller\MedicalOverview' => 'MelisDesign\Controller\MedicalOverviewController',
            'MelisDesign\Controller\MedicalPatients' => 'MelisDesign\Controller\MedicalPatientsController',
            'MelisDesign\Controller\MedicalAppointments' => 'MelisDesign\Controller\MedicalAppointmentsController',
            'MelisDesign\Controller\MedicalMemos' => 'MelisDesign\Controller\MedicalMemosController',
            'MelisDesign\Controller\MedicalMetrics' => 'MelisDesign\Controller\MedicalMetricsController',
            'MelisDesign\Controller\Social' => 'MelisDesign\Controller\SocialController',
            'MelisDesign\Controller\ShopEditProducts' => 'MelisDesign\Controller\ShopEditProductsController',
            'MelisDesign\Controller\ShopProducts' => 'MelisDesign\Controller\ShopProductsController',
            'MelisDesign\Controller\Login' => 'MelisDesign\Controller\LoginController',
            'MelisDesign\Controller\Signup' => 'MelisDesign\Controller\SignupController',
            'MelisDesign\Controller\MyAccount' => 'MelisDesign\Controller\MyAccountController',
            'MelisDesign\Controller\Ratings' => 'MelisDesign\Controller\RatingsController',
            'MelisDesign\Controller\Error' => 'MelisDesign\Controller\ErrorController',
        ),
    ),

    'view_manager' => array(
        'display_not_found_reason' => true,
        'display_exceptions'       => true,
        'doctype'                  => 'HTML5',
        'template_map' => array(
            'layout/layout' => __DIR__ . '/../view/layout/default.phtml',
        ),
        'template_path_stack' => array(
            __DIR__ . '/../view',
        ),
        'strategies' => array(
            'ViewJsonStrategy',
        ),
    ),
    'asset_manager' => array(
        'resolver_configs' => array(
            'aliases' => array(
                'MelisDesign/' => __DIR__ . '/../public/',
            ),
        ),
    ),
);
