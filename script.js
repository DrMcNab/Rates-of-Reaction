window.onload = function() {
    var urls = [
        'https://forms.office.com/Pages/ResponsePage.aspx?id=oyzTzM4Wj0KVQTctawUZKdeWF-cF3h9InCh9rgssk7tURFI5MThUTk5LOFBXSFlMSUpMNUxKMDU2TC4u',
        'https://forms.office.com/Pages/ResponsePage.aspx?id=oyzTzM4Wj0KVQTctawUZKdeWF-cF3h9InCh9rgssk7tUNDU1QzFXOE1FSTdCVlBBRkdESzI2WlczVi4u',
        'https://forms.office.com/Pages/ResponsePage.aspx?id=oyzTzM4Wj0KVQTctawUZKdeWF-cF3h9InCh9rgssk7tUQTA3UEpYWlE1MlFQSjc1R0FXRFdYRDZTNS4u',
        'https://forms.office.com/Pages/ResponsePage.aspx?id=oyzTzM4Wj0KVQTctawUZKdeWF-cF3h9InCh9rgssk7tUNVBNM1QzOEZSWVJBRjJKREs4OFU4UUJNNC4u'
    ];
    var randomUrl = urls[Math.floor(Math.random() * urls.length)];
    window.location.href = randomUrl;
};
