MiniInbox = ReactMeteor.createClass({
  displayName: 'MiniInbox',
  templateName: 'MiniInbox',

  startMeteorSubscriptions: function () {
    Meteor.subscribe("unread-messages");
  },

  getMeteorState: function () {
    var messages           = InboxMessages.find().fetch(),
        unreadMessageCount = InboxMessages.find().count;

    return {
      unreadMessages: messages,
      unreadMessageCount: unreadMessageCount
    }
  },

  render: function () {
    return (
      <li className="dropdown">
        <a className="dropdown-toggle" data-toggle="dropdown" href="#">
          <i className="fa fa-envelope fa-fw"></i>
          <i className="fa fa-caret-down"></i>
        </a>
        <ul className="dropdown-menu dropdown-messages">
          {_.map(this.state.unreadMessages, function (message) {
            return (
              <li key={message._id} className="inbox-message">
                <a href="#">
                  <div>
                    <strong>{message.senderName}</strong>
                    <span className="pull-right text-muted">
                      <em>{message.sentAt}</em>
                    </span>
                  </div>
                  <div>{String(message.body).substr(0, 75)} ...</div>
                </a>
              </li>
            );
          })}
          <li>
            <a className="text-center" href="#">
              <strong>Read All Messages </strong>
              <i className="fa fa-angle-right"></i>
            </a>
          </li>
        </ul>
      </li>
    );
  }
});
