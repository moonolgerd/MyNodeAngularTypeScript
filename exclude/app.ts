// 'use strict';

// angular.module('myApp', ['agGrid'])
//     .factory('MySqlService', ['$http', ($http) => new MySqlService($http)])
//     .controller('ResultsController', ['$scope', 'MySqlService', ($scope, service) => new ResultsController($scope, service)]);

// interface IResults {
//     selectedPeriod: string;
//     periods: string[];
//     defaultLob: string[];
//     selectedLobs: string[];
//     defaultRegions: string[];
//     update();
//     export();
//     gridOptions: ag.grid.GridOptions;
//     emptyResults: boolean;
// }

// class MySqlService {

//     http: ng.IHttpService;
    
//     constructor($http: ng.IHttpService) {
//         this.http = $http;
//     }

//     get(successCallback: Function) {
//         this.http.get('http://localhost:8000/results').then((data) => successCallback(data));
//     }
// }

// class ResultsController {

//     scope: IResults;
//     service: MySqlService;

//     constructor($scope: IResults, service : MySqlService) {
//         this.scope = $scope;
//         this.service = service;

        
//         this.scope.periods = this.getPeriod();
//         this.scope.selectedPeriod = this.scope.periods[0];
//         this.scope.defaultLob = ['ETD', 'FO', 'ETT', 'ELT', 'HT', 'PT', 'SRCM', 'AMS'].sort();
//         this.scope.selectedLobs = ['ETD'];
//         this.scope.defaultRegions = ['AMRS', 'APAC', 'EMEA'];
//         this.scope.emptyResults = true;

//         this.scope.update = () => service.get(result => {
//             this.scope.gridOptions.api.setRowData(result.data.json);
//             this.scope.emptyResults = false;
//         });
//         this.scope.export = () => this.export();
        
//         const columnDefs = [
//             {
//                 headerName: 'id',
//                 width: 110,
//                 cellRenderer: this.idCellRenderer
//             },
//             {
//                 headerName: 'status',
//                 field: 'status',
//                 width: 80,
//                 cellStyle: params => {
//                     if (params.value === 'closed')
//                         return { 'color': 'blue' };
//                     return { 'color': 'black' };
//                 }
//             },
//             { headerName: 'Title', field: 'title' },
//             { headerName: 'Description', field: 'description' },
//             { headerName: 'Time Spent', field: 'time_spent', width: 90 },
//             { headerName: 'Created By Name', field: 'created_by_name' },
//             { headerName: 'Updated By Name', field: 'updated_by_name' },
//             { headerName: 'Closed By Name', field: 'closed_by_name' },
//             { headerName: 'Created At', field: 'created_at' },
//             { headerName: 'Updated At', field: 'updated_at' },
//             { headerName: 'Closed At', field: 'closed_at' },
//             { headerName: 'Assigned Team Name', field: 'assigned_team_name' },
//             { headerName: 'Assigned User Name', field: 'assigned_user_name' },
//             { headerName: 'Impact Duration', field: 'impact_duration' },
//             { headerName: 'Client Name', field: 'client_name' },
//             { headerName: 'Reported On', field: 'reported_on' },
//             { headerName: 'Dollar Impact', field: 'dollar_impact' },
//             { headerName: 'ITSM Reference', field: 'itsm_reference' },
//             { headerName: 'Priority Impact', field: 'priority_impact' },
//             { headerName: 'Technology Owner', field: 'technology_owner' },
//             { headerName: 'Repeat Occurrence', field: 'repeat_occurrence', hide: true },
//             { headerName: 'Remediation', field: 'remediation', hide: true },
//             { headerName: 'Responsible Party', field: 'responsible_party', hide: true },
//             { headerName: 'Resolved On', field: 'resolved_on', hide: true },
//             { headerName: 'Resolution', field: 'resolution' },

//             { headerName: 'LOB', field: 'lob' },
//             { headerName: 'region', field: 'region' },
//             { headerName: 'Duration Range', field: 'duration_range' }
//         ];
//         this.scope.gridOptions = {
//             columnDefs: columnDefs,
//             enableColResize: true,
//             showToolPanel: true,
//             enableSorting: true,
//             pinnedColumnCount: 2,
//             enableFilter: true
//         };
//     }

//     getPeriod():string[] {
//         return ['Nov 2015', 'Oct 2015'];
//     }


//     private idCellRenderer(params) {
//         var link = "<a href=https://papa.bankofamerica.com/tickets/" + params.data.id + ">" + params.data.id + '</a>';
//         return link;
//     }

//     private export() {
//         const params = {
//             fileName: "Results.csv"
//         };
//         this.scope.gridOptions.api.exportDataAsCsv(params);
//     }
    
//     //var date = new Date(document.getElementById('period').value.replace(/\s/, " 1 "));
//     //return [
//     //    [date.getFullYear(), String("0" + (date.getMonth() + 1)).slice(-2), String("0" + date.getDate()).slice(-2)].join("-"),
//     //    [date.getFullYear(), String("0" + (date.getMonth() + 2)).slice(-2), String("0" + date.getDate()).slice(-2)].join("-")
//     //];
// }


