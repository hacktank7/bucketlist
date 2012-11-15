Ext.define('MyApp.view.List', {
    extend: 'Ext.navigation.View',
    xtype: 'listTab',
    
    requires: [
		'Ext.dataview.List' ,
		'Ext.data.proxy.JsonP' ,
		'Ext.data.Store'
               ],
    
    config: {
        title: '테마',
        iconCls: 'star',
        
        items: [
            {
                xtype: 'list',
                itemTpl: '{title}',
                title: '리스트1',
                
                store: {
                    autoLoad: true,
                    fields: ['title', 'author', 'content'],
                    
                    proxy: {
                        type: 'jsonp',
                        url: 'https://ajax.googleapis.com/ajax/services/feed/load?v=1.0&q=http://feeds.feedburner.com/SenchaBlog',
                        
                        reader: {
                            type: 'json',
                            rootProperty: 'responseData.feed.entries'
                        }
                    }
                }
            }
        ]
    }
});