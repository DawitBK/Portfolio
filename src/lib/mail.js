// Where "email me" goes. A mailto: link only works when the visitor has a desktop mail app registered, and many people
// use webmail only, so the main action opens Gmail's compose window and a menu offers the other webmail services and the
// default mail app. Every route arrives with the recipient and a subject already filled in.
const SUBJECT = 'Hello Dawit';

export function composeLinks(address, subject = SUBJECT) {
    const to = encodeURIComponent(address);
    const su = encodeURIComponent(subject);
    return {
        gmail: `https://mail.google.com/mail/?view=cm&fs=1&to=${to}&su=${su}`,
        outlook: `https://outlook.live.com/mail/0/deeplink/compose?to=${to}&subject=${su}`,
        yahoo: `https://compose.mail.yahoo.com/?to=${to}&subject=${su}`,
        app: `mailto:${address}?subject=${su}`,
    };
}
