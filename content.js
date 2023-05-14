chrome.runtime.onInstalled.addListener(() => {
    chrome.declarativeNetRequest.updateDynamicRules({
        removeRuleIds: ['rule_0']
    }, () => {
        chrome.declarativeNetRequest.updateDynamicRules({
            addRules: [{
                id: 'rule_0',
                priority: 1,
                action: {
                    type: 'modifyRequest',
                    loginRequest: {
                        username: 'myusername',
                        password: 'mypassword'
                    }
                },
                condition: {
                    urlFilter: '*://example.com/login',
                    resourceTypes: ['main_frame']
                }
            }]
        });
    });
});
