Ext.define('BucketList.model.BkListSave', {
    extend: 'Ext.data.Model',
    config: {
        fields: ['id', 'query'],
        proxy: {
            type: 'localstorage',
            id  : 'saveModel'
        }
    }
});