"use strict";
exports.__esModule = true;
exports.routes = void 0;
exports.routes = [
    {
        path: '',
        title: 'Loading',
        loadComponent: function () { return Promise.resolve().then(function () { return require('./ui/loading-page/loading-page.component'); }); }
    },
    {
        path: 'home',
        title: 'Home',
        loadComponent: function () { return Promise.resolve().then(function () { return require('./ui/home/home.component'); }); },
        children: [
            {
                path: '',
                loadComponent: function () {
                    return Promise.resolve().then(function () { return require('./ui/home/home-content/home-content.component'); });
                }
            },
            {
                path: 'apropos',
                title: 'apropos de',
                loadComponent: function () {
                    return Promise.resolve().then(function () { return require('./ui/home/apropos/apropos.component'); });
                }
            },
        ]
    },
    {
        path: 'gaming',
        title: 'Gaming',
        loadComponent: function () { return Promise.resolve().then(function () { return require('./ui/gaming-page/gaming-page.component'); }); }
    },
    {
        path: 'quiz-final-result',
        title: 'Quiz final result',
        loadComponent: function () {
            return Promise.resolve().then(function () { return require('./ui/quiz-final-result/quiz-final-result.component'); });
        },
        children: [
            {
                path: '',
                title: 'Quiz Results',
                loadComponent: function () {
                    return Promise.resolve().then(function () { return require('./ui/quiz-final-result/result/result.component'); });
                }
            },
            {
                path: 'result-details',
                title: 'Quiz Result details',
                loadComponent: function () {
                    return Promise.resolve().then(function () { return require('./ui/quiz-final-result/result-details/result-details.component'); });
                }
            },
        ]
    },
];
