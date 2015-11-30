import mooAccordionComponent from './mooAccordion.component';
import mooAccordionPanelComponent from './mooAccordionPanel.component';
import mooAccordionPanelTriggerComponent from './mooAccordionPanelTrigger.component';
import mooAccordionPanelHeaderComponent from './mooAccordionPanelHeader.component';
import mooAccordionPanelBodyComponent from './mooAccordionPanelBody.component';

// Controllers Needed to be registered for use in 'ng-controller'
import mooAccordionPanelCtrl from './mooAccordionPanel.controller.js';

export default app => {
  app
     .directive('mooAccordion', mooAccordionComponent)
     .directive('mooAccordionPanel', ['$parse', mooAccordionPanelComponent])
     .directive('mooAccordionPanelTrigger', ['$parse', mooAccordionPanelTriggerComponent])
     .directive('mooAccordionPanelHeader', ['$parse', mooAccordionPanelHeaderComponent])
     .directive('mooAccordionPanelBody', ['$parse', mooAccordionPanelBodyComponent])
     .controller('mooAccordionPanelCtrl', mooAccordionPanelCtrl);
}
