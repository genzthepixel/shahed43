import Array "mo:core/Array";
import Text "mo:core/Text";
import Order "mo:core/Order";

actor {
  type Message = {
    name : Text;
    email : Text;
    content : Text;
  };

  module Message {
    public func compare(message1 : Message, message2 : Message) : Order.Order {
      Text.compare(message1.name, message2.name);
    };
  };

  var messages : [Message] = [];

  public shared ({ caller }) func sendMessage(name : Text, email : Text, content : Text) : async () {
    let message : Message = {
      name;
      email;
      content;
    };
    messages := messages.concat([message]);
  };

  public query ({ caller }) func getAllMessages() : async [Message] {
    messages.sort();
  };
};
