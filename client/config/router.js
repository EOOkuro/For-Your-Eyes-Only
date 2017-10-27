
FlowRouter.route('/dashboard3', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "dashboard3"});
    }
});

FlowRouter.route('/agileBoard', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "agileBoard"});
    }
});

//
// Layouts route
//

FlowRouter.route('/layouts', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "layouts"});
    }
});

//
// Forms
//


FlowRouter.route('/formBasic', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "formBasic"});
    }
});


FlowRouter.route('/formAdvanced', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "formAdvanced"});
    }
});


FlowRouter.route('/formWizard', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "formWizard"});
    }
});


FlowRouter.route('/formUpload', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "formUpload"});
    }
});

FlowRouter.route('/autocomplete', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "autocomplete"});
    }
});

FlowRouter.route('/login', {
    action: function() {
        BlazeLayout.render("blankLayout", {content: "login"});
    }
});

FlowRouter.route('/forgotPassword', {
    action: function() {
        BlazeLayout.render("blankLayout", {content: "forgotPassword"});
    }
});

FlowRouter.route('/lockScreen', {
    action: function() {
        BlazeLayout.render("blankLayout", {content: "lockScreen"});
    }
});

FlowRouter.route('/passwordMeter', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "passwordMeter"});
    }
});

FlowRouter.route('/validation', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "validation"});
    }
});

FlowRouter.route('/socialButtons', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "socialButtons"});
    }
});

//
// File manager
//

FlowRouter.route('/profile2', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "profile2"});
    }
});

FlowRouter.route('/pdfViewer', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "pdfViewer"});
    }
});

FlowRouter.route('/fileManager', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "fileManager"});
    }
});

//
// Other pages
//

FlowRouter.route('/errorOne', {
    action: function() {
        BlazeLayout.render("blankLayout", {content: "errorOne"});
    }
});

FlowRouter.route('/errorTwo', {
    action: function() {
        BlazeLayout.render("blankLayout", {content: "errorTwo"});
    }
});

//
// Miscellaneous
//

FlowRouter.route('/toastrNotification', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "toastrNotification"});
    }
});

FlowRouter.route('/i18support', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "i18support"});
    }
});

FlowRouter.route('/forumDetail', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "forumDetail"});
    }
});

FlowRouter.route('/loadingButtons', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "loadingButtons"});
    }
});

FlowRouter.route('/chatView', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "chatView"});
    }
});

//
// UI Elements
//


FlowRouter.route('/typography', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "typography"});
    }
});

FlowRouter.route('/icons', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "icons"});
    }
});

FlowRouter.route('/buttons', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "buttons"});
    }
});

FlowRouter.route('/notifications', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "notifications"});
    }
});

FlowRouter.route('/helperClasses', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "helperClasses"});
    }
});

FlowRouter.route('/badgesLabels', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "badgesLabels"});
    }
});

//
// Billing
//

FlowRouter.route('/payments', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "payments"});
    }
});

FlowRouter.route('/pdfViewer', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "pdfViewer"});
    }
});

FlowRouter.route('/invoice', {
    action: function() {
        BlazeLayout.render("mainLayout", {content: "invoice"});
    }
});

FlowRouter.route('/invoicePrint', {
    action: function() {
        BlazeLayout.render("blankLayout", {content: "invoicePrint"});
    }
});

//
// Other pages routes
//

FlowRouter.route('/notFound', {
    action: function() {
        BlazeLayout.render("blankLayout", {content: "notFound"});
    }
});

