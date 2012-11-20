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
                	  "<img src='{user}'>" +
                "</div>" +
                "<div style='margin-left: 62px;'>" + 
                "{text}<br>{created_at:date('d M Y')}" +
                "</div>",
                title: '버킷리스트',
                
                store: 'bkListBasic'
            }
        ]
    }
});