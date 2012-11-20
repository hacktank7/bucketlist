Ext.define('BucketList.store.BkListStore', {
    extend: 'Ext.data.Store',

    requires: [
        'BucketList.model.BkListModel'
    ],

    config: {
        autoLoad: true,
        model: 'BucketList.model.BkListModel',
        storeId: 'bkListBasic',
        proxy: {
            type: 'jsonp',
            url: 'http://api.twitter.com/1/statuses/user_timeline.json?screen_name=xguru&count=20&include_entities=true&include_rts=false',
            reader: {
                type: 'json'//,
                //rootProperty: 'user'
            }
        }
    }
});