Ext.define('BucketList.model.BkListModel',{
		extend: 'Ext.data.Model',
	    config: {
	    	fields: [	    	            	    	
		        {
		        	name: 'user',
		        	mapping: 'user.profile_image_url'
		        },
		    	{
		    		name: 'text'
		    	},
		    	{
		    		name: 'created_at'
		    	}
		    ]
	    }		
	}
);