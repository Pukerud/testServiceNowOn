import { BusinessRule, UIAction } from '@servicenow/sdk/core'
import '@servicenow/sdk/global'
import { showStateUpdate } from '../server/script.js'

// Creates a UI Action button on the Incident form header to change the background color.
UIAction({
    $id: Now.ID['rainbow_ui_action'],
    name: '🎨 Make it Rainbow!',
    table: 'incident',
    sys_name: 'make_it_rainbow_button',
    action_name: 'makeItRainbow',
    client: true,
    form_button: true,
    active: true,
    script: script`function makeItRainbow() {
        var colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#FFD93D', '#6BCF7F'];
        var randomColor = colors[Math.floor(Math.random() * colors.length)];

        // Find a suitable element to apply the background color to.
        // This targets elements specific to Workspace and falls back to a more general one for the classic UI.
        var colorTarget = document.querySelector('.sn-component-workspace-main') ||
                          document.querySelector('.form-horizontal') ||
                          document.body;

        if (colorTarget) {
            colorTarget.style.background = 'linear-gradient(135deg, ' + randomColor + ', white)';
            g_form.addInfoMessage('🌈 Form color changed! You made it fun! 🎉');
        } else {
            g_form.addInfoMessage('⚠️ Could not find an element to apply color to.');
        }
    }`
});


//creates a business rule that pops up state change message whenever a todo record is updated
BusinessRule({
    $id: Now.ID['br0'],
    action: ['update'],
    table: 'incident',
    script: showStateUpdate,
    name: 'LogStateChange',
    order: 100,
    when: 'after',
    active: true,
})
