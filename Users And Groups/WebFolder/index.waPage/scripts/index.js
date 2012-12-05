
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var documentEvent = {};	// @document
// @endregion// @endlock

// eventHandlers// @lock

	documentEvent.onLoad = function documentEvent_onLoad (event)// @startlock
	{// @endlock
		var
		grid = $$('dataGrid1');
		
		grid.bindToNNRelation({
			columns	: {
				dataClass   : 'Group',
	            titleAttr   : 'fullName',
	            width       : 160
			},
			rows    : {
	            dataClass           : 'User',
	            pushToDataSource    : [
	                {
	                    sourceAttID     : 'fullname',
	                    width           : 100,
	                    title           : 'User',
	                    readOnly        : true,
	                    addTolColumns   : true
	                },
	                {
	                    sourceAttID     : 'email',
	                    width           : 200,
	                    title           : 'Email Address',
	                    readOnly        : true,
	                    addTolColumns   : true
	                }
	            ]
	        },
	        dataSourceName : 'helloMed'
		});
		
		$(grid).bind('bindToNNRelationReady' , function(){
			console.log($(this).data('_binToNNRelation').dataSource.getID());
		});
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("document", "onLoad", documentEvent.onLoad, "WAF");
// @endregion
};// @endlock
