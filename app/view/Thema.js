Ext.define('BucketList.view.Thema', {
    extend: 'Ext.navigation.View',
    xtype: 'listTab',
    
    requires: [
		'Ext.dataview.List' ,
		'Ext.data.proxy.JsonP' ,
		'Ext.data.Store'
               ],
    
    config: {
        title: '버킷리스트',
        iconCls: 'star',
        
        items: [
            {
                xtype: 'list',
                itemTpl: "<div style='float:left; width: 60px;'>" +
                	  "<img src='{profile_image_url}'>" +
                "</div>" +
                "<div style='margin-left: 62px;'>" + 
                "{text}<br>{created_at:date('d M Y')}" +
                "</div>",
                title: '버킷리스트',
                
                store: {
                    autoLoad: true,
                    fields: ['profile_image_url', 'text', 'created_at'],
                    
                    proxy: {
                        type: 'jsonp',
                        url: 'http://api.twitter.com/1/statuses/user_timeline.json?screen_name=xguru&count=20&include_entities=true&include_rts=false',
                        
                        reader: {
                            type: 'json',
                            rootProperty: 'user'
                        }
                    }
                }
            }
        ]
    }
});