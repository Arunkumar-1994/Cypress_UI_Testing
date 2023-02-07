const report = require('multiple-cucumber-html-reporter');

report.generate({
	jsonDir: 'cypress/cucumber-json',
	reportPath: './reports/cucumber-html-report.html',
	metadata:{
        browser: {
            name: 'chrome',
            version: '109'
        },
        device: 'Local test machine',
        platform: {
            name: 'windows',
            version: '11'
        }
    },
    customData: {
        title: 'Guru99 Insurance LoginSuccess,Login Failure,request quotation,retrieve quotation,profile,edit profile',
        data: [
            {label: 'Guru99 Insurance', value: 'Custom project'},
            {label: 'Release', value: '1.2.3'},
            {label: 'Cycle', value: 'B11221.34321'},
            {label: 'Execution Start Time', value: 'Feb 7th 2023, 03:25 PM EST'},
            {label: 'Execution End Time', value: 'Feb 8th 2023, 04:20 PM EST'}
        ]
    }
});