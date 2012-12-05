var __myNameSpace = __myNameSpace || {};

__myNameSpace.Model = {};

var
model	= {};

(function(){
	var
	modelFolder		= 'Model/',
	extension		= '.js',
	dataClasses		= ['NNRelation' , 'User' , 'Group'],
	relations		= ['User_Group_Relation'];
	
	for(var i = 0 , file ; file = dataClasses[i] ; i++){
		include(modelFolder + file + extension);
	}
	
	for(var i = 0 , file ; file = relations[i] ; i++){
		include(modelFolder + 'Relations/' + file + extension);
	}
})();