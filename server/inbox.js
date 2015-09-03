InboxMessages = new Meteor.Collection("inbox-messages");

InboxMessages.attachSchema(new SimpleSchema({
  unread: {
    type: Boolean,
    defaultValue: true
  },

  senderName: {
    type: String
  },

  recipientIds: {
    type: [String]
  },

  subject: {
    type: String,
    optional: true
  },

  body: {
    type: String,
    optional: true
  },

  sentAt: {
    type: Date,
    denyUpdate: true
  }
}));

Meteor.publish("unread-messages", function(){
  if (this.userId) {
    return InboxMessages.find({
      recipientIds: {$in: [this.userId]},
      unread: true
    });
  } else {
    this.ready();
  }
});
