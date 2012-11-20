Ext.define('BucketList.controller.BkListController', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
        	listTab: 'listTab'
        },
        control: {
        	'listTab list': {
        		itemtap: 'BkListClick'
        	}
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    },
    BkListClick: function(list, index, target, record){
    	console.log(record.get('text'));
    	this.getListTab().push({
    		xtype: 'panel',
    		title: record.get('text')
    	});
    }
});