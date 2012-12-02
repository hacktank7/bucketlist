
Ext.define('BucketList.controller.BkListController', {
    extend: 'Ext.app.Controller',
    requires: ['Ext.carousel.Carousel'],
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
    	var bkSv = Ext.create('BucketList.model.BkListSave');	
    	bkSv.set('id', record.get('id'));
    	bkSv.set('query', {
    		user: record.get('user'),
    		text: record.get('text')
    	});
    	
    	this.getListTab().add({
    		xtype: 'panel',
    		id: 'detail',
    		title: record.get('text'),
    		html: '11st',
    		layout: 'card',
    		items: [
    		    {
    		    	xtype: 'panel',
    		    //	html: 11111,
    	    		items: [{
    	    			xtype: 'carousel',
    	    			width: '100',
    	    			height: '100',
    	    			docked: 'top',
    	    		    defaults: {
    	    		        styleHtmlContent: true
    	    		    },

    	    		    items: [
    	    		        {
    	    		            html : 'Item 1',
    	    		            style: 'background-color: #5E99CC'
    	    		        },
    	    		        {
    	    		            html : 'Item 2',
    	    		            style: 'background-color: #759E60'
    	    		        },
    	    		        {
    	    		            html : 'Item 3'
    	    		        }
    	    		    ]
    	    			
    	    		},{
    	    			id: 'moveBtn',
    	    			xtype: 'button',
    	    			docked: 'bottom',
    	    			text: '디테일'	
    	    		},{
    	    			id: 'saveBtn',
    	    			xtype: 'button',
    	    			docked: 'bottom',
    	    			text: '저장'	,
    	    			model: bkSv
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
    BkSaveList: function(recode){
    	var store = Ext.create('Ext.data.Store', {
    	    model: "BucketList.model.BkListSave"
    	});
    	store.id = 'bkList';
    	store.load();
    	store.add({
    		query: recode.model.data.query
    	});
    	store.sync();  	
    }
});