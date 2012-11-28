Ext.define('BucketList.view.Theme', {
    extend: 'Ext.navigation.View',
    xtype: 'listTab',
    
    requires: [
		'Ext.dataview.List' ,
		'Ext.data.proxy.JsonP' ,
		'Ext.data.Store'
               ],
    
    config: {
        title: '테 마',
        iconCls: 'home',
        
        items: [
            {
                xtype: 'list',
                itemTpl: "<div style='float:left; width: 60px;'>" +
                	  "<img src='{user}'>" +
                "</div>" +
                "<div style='margin-left: 62px;'>" + 
                "{text}<br>{created_at:date('d M Y')}" +
                "</div>",
                title: '테 마',
                
                store: 'bkListBasic'
            }
        ]
    }
});