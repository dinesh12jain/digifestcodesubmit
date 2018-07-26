let config = {
    // TODO Add Application ID
    appId : 'amzn1.ask.skill.9877cd48-b229-4e79-a755-a70ae0967d67',
    // TODO Add an appropriate welcome message.
    welcome_message : 'welcome to my feed',

    number_feeds_per_prompt : 3,
    speak_only_feed_title : true,
    display_only_title_in_card : true,

    // TODO Add the category name (to feed name) and the corresponding URL
    feeds : {
        '',
        '',
        'CATEGORY_NAME_3' : '<FEED_URL>'

    },

    speech_style_for_numbering_feeds : 'Item',

    // TODO Add the s3 Bucket Name, dynamoDB Table Name and Region
    s3BucketName : '<S3-BUCKET-NAME>',
    dynamoDBTableName : '<DYNAMODB-TABLE-NAME>',
    dynamoDBRegion : '<DYNAMODB-REGION>'
};

module.exports = config;
