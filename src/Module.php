<?php

/**
 * Melis Technology (http://www.melistechnology.com)
 *
 * @copyright Copyright (c) 2016 Melis Technology (http://www.melistechnology.com)
 *
 */

namespace MelisDesign;

use Zend\Mvc\ModuleRouteListener;
use Zend\Mvc\MvcEvent;
use Zend\ModuleManager\ModuleManager;
use Zend\Stdlib\ArrayUtils;
use Zend\Session\Container;


class Module
{
    public function onBootstrap(MvcEvent $e)
    {
        $eventManager        = $e->getApplication()->getEventManager();
        $moduleRouteListener = new ModuleRouteListener();
        $moduleRouteListener->attach($eventManager);
        
        $this->createTranslations($e);
    }
    
    public function init(ModuleManager $manager)
    {
        
    }

    public function getConfig()
    {
        $config = array();
        $configFiles = array(
            include __DIR__ . '/../config/module.config.php',
            include __DIR__ . '/../config/app.interface.php',
        );
        
        foreach ($configFiles as $file) {
            $config = ArrayUtils::merge($config, $file);
        } 
        
        return $config;
    }

    public function getAutoloaderConfig()
    {
        return array(
            'Zend\Loader\StandardAutoloader' => array(
                'namespaces' => array(
                    __NAMESPACE__ => __DIR__ . '/src/' . __NAMESPACE__,
                ),
            ),
        );
    }
    
    public function createTranslations($e)
    {
        $sm = $e->getApplication()->getServiceManager();
        $translator = $sm->get('translator');

        // Get the locale used from meliscore session
        $container = new Container('meliscore');
        $locale = $container['melis-lang-locale'];

        // Load files

        if (!empty($locale))
        {
            $translator->addTranslationFile('phparray', __DIR__ . '/../language/' . $locale . '.interface.php');
        }
    }
 
}
