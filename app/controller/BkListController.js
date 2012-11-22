Ext.define('BucketList.controller.BkListController', {
    extend: 'Ext.app.Controller',
    
    config: {
        refs: {
        	listTab: 'listTab'
        },
        control: {
        	'listTab list': {
        		itemtap: 'BkListClick'
        	},
        	'panel #moveBtn': {
        		tap: 'BkListDetail'
        	},
        	'panel #saveBtn': {
        		tap: 'BkSaveList'
        	}
        }
    },
    
    //called when the Application is launched, remove if not needed
    launch: function(app) {
        
    },
    BkListClick: function(list, index, target, record){
    	//console.log(record.get('text'));
    	this.getListTab().push({
    		xtype: 'panel',
    		id: 'detail',
    		title: record.get('text'),
    		html: '1st',
    		layout: 'card',
    		items: [
    		    {
    		    	xtype: 'panel',
    		    	html: 3,
    	    		items: [{
    	    			id: 'moveBtn',
    	    			xtype: 'button',
    	    			docked: 'bottom',
    	    			text: '디테일'	
    	    		},{
    	    			id: 'saveBtn',
    	    			xtype: 'button',
    	    			docked: 'bottom',
    	    			text: '저장'	
    	    		}]

    		    },
    		    {
    		    	xtype: 'panel',
    		    	html: record.get('text')
    		    }
    		]
    	
    	});
    },
    BkListDetail: function() {
    	//console.log('ddd');
    	Ext.getCmp('detail').setActiveItem(1);
    },
    BkSaveList: function(){
    	var store = Ext.create('Ext.data.Store', {
    	    model: "BucketList.model.BkListSave"
    	});
    	store.id = record.get('id');
    	store.load();
    	store.add({
    		img: record.get('user'),
    		text: record.get('text')
    	});
    	store.sync();  	
    }
});