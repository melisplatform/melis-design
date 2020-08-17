<?php

/**
 * Melis Technology (http://www.melistechnology.com)
 *
 * @copyright Copyright (c) 2016 Melis Technology (http://www.melistechnology.com)
 *
 */

namespace MelisDesign\Controller;

use MelisCore\Controller\MelisAbstractActionController;
use Laminas\View\Model\ViewModel;
use Laminas\View\Model\JsonModel;
use Laminas\Session\Container;

class DesignSidebarController extends MelisAbstractActionController
{

    public function renderDesignSidebarAction() {
        $view = new ViewModel();
        return $view;
    }

    public function getDomAction()
    {

        $tool = $this->getServiceManager()->get('MelisCoreTool');
        $domContent= $tool->getViewContent(array(
            'module' => 'MelisDesign',
            'controller' => 'DesignSidebar',
            'action' => 'render-design-sidebar'
        ));
        $response = array(
            'dom' => $domContent
        );

        return new JsonModel($response);
    }


    public function getResourceAction()
    {
        $css = [];
        

        if($this->getRequest()->isXmlHttpRequest()) {
            $config = $this->getServiceManager()->get('MelisCoreConfig');
            
            $key = $this->params()->fromQuery('key', null);

            $config = $config->getItem('melisdesign/datas/'.$key);
            if($config) {
                $css = $config;
            }
        }

        $response = [
            'css' => $css
        ];

        return new JsonModel($response);
    }

    
    
}