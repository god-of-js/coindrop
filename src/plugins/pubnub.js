const PUBLISH = "pub-c-26964bc8-3ed1-4e26-8215-2bb9f31ab4d9";
const SUBSCRIBE = "sub-c-270738aa-8c16-11eb-83ad-9af11ba6f334";

import PubNub from "pubnub";
export default () => {
  return new PubNub({
    publishKey: PUBLISH,
    subscribeKey: SUBSCRIBE,
    ssl: true
  });
};
