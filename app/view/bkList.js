Ext.define('BucketList.view.bkList', {
    extend: 'Ext.navigation.View',
    xtype: 'listTab2',
    
    requires: [
		'Ext.dataview.List' ,
		'Ext.data.proxy.JsonP' ,
		'Ext.data.Store'
               ],
    
    config: {
        title: 'my리스트',
        iconCls: 'star',
        
        items: [
            {
                xtype: 'list',
                itemTpl: '{title}',
                title: '나의 버킷리스트',
                
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