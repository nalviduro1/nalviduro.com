import { ServicePage, serviceMetadata } from '../../services/ServicePage';
import type { ServiceSpec } from '../../services/shared';

/**
 * Plan item 7: one opinion piece. Source of truth is
 * content/notes/rent-or-own-ticketing.md; this page says the same thing.
 * DRAFT: Nalvi edits before it is linked from anywhere or pushed.
 */

const SPEC: ServiceSpec = {
  path: '/notes/rent-or-own-ticketing',
  title: 'Rent or own your ticketing?',
  description:
    'When an events business should use a ticketing service, and when it should own the flow.',
  eyebrow: 'Notes · Events and payments',
  headline: 'Rent or own your ticketing?',
  lead: 'If you run events, sooner or later someone asks whether to keep using Eventbrite or Humanitix, or to sell tickets yourself. The tool is the smaller question. The bigger ones are who holds the money, who holds the customer, and who gets the call when checkout breaks.',
  lean: true,
  article: {
    title: 'The short version',
    body: (
      <>
        <h3 className="nalvi-pm-h3">Rent when</h3>
        <p>
          Rent a ticketing service if you run a few events a year, if no one on
          your team wants to be the person who fixes things, or if you need to
          be selling by Friday. A rented service gives you a checkout page,
          confirmation emails, a scanning app, fraud handling and a support
          desk. You pay for all of that in a per-ticket fee, and for a handful
          of events it is usually the cheapest thing you can do with your time.
        </p>
        <p>
          Know what you are accepting. The service sits between you and the
          buyer, so the buyer’s relationship is partly with them. Their rules
          decide when you are paid and how refunds work. What you can export
          about your own attendees is whatever they allow. Read those three
          things before you start, not after your first sold-out night.
        </p>

        <h3 className="nalvi-pm-h3">Own when</h3>
        <p>
          Own the flow if you run events all year for an audience that comes
          back, if you already have a site people trust, or if your tickets do
          not fit the template: members-only prices, a ticket bundled with a
          membership, free RSVPs next to paid seats. Owning also starts to make
          sense when the per-ticket fees across a year add up to real money.
        </p>
        <p>
          Owning does not mean building a payment system. Card handling, fraud
          checks and payouts stay with Stripe. What you own is the event page,
          the order records, the confirmation email and the check-in list. That
          is the part where your name, your list and your rules matter.
        </p>

        <h3 className="nalvi-pm-h3">What it looks like in practice</h3>
        <p>
          On pakezdrite.com, organizers who sell tickets use their own Stripe
          account. The buyer pays the organizer directly, the organizer’s name
          is on the card statement, and the platform never holds the ticket
          money. Refunds and disputes belong to the seller. The{' '}
          <a href="/work/ticketing">ticketing page</a> draws the path one ticket
          takes. The same shape works for any events business: the money and the
          customer stay with the business, and the software only moves them
          along.
        </p>

        <h3 className="nalvi-pm-h3">What owning costs you</h3>
        <p>
          You now answer the buyer’s email the night before. You decide refund
          rules and apply them. Someone checks tickets at the door and fixes the
          list when it is wrong. If something breaks, it is yours to fix or to
          pay someone to fix. Stripe still charges its card fees; the saving is
          the layer on top, not the whole bill.
        </p>

        <h3 className="nalvi-pm-h3">A rule of thumb</h3>
        <p>
          Start by renting. Move to owning when you can answer three questions
          plainly:
        </p>
        <ol>
          <li>
            Do I have an audience that returns, so that the list I keep is worth
            keeping?
          </li>
          <li>
            Do I know what I pay in fees across a year, and what I would keep?
          </li>
          <li>
            Who gets the message when checkout breaks at five o’clock on the day
            of the event?
          </li>
        </ol>
        <p>If you cannot name that person, keep renting.</p>
        <p>
          If you are going to move later, make the move cheap now. Export your
          attendee list after every event, keep your own mailing list, and put
          your events on your own site even if the checkout is somebody else’s.
          Then switching is a swap, not a restart.
        </p>
      </>
    ),
  },
  who: [],
  services: [],
  cases: [],
  tools: [],
  faq: [],
  close: {
    title: 'If you are deciding',
    body: 'Tell me what you sell, how often and to whom, and I will say which side of this you are on. The first call is free.',
  },
  subject: 'Rent or own ticketing',
};

export const metadata = {
  ...serviceMetadata(SPEC),
  robots: { index: false, follow: false },
};

export default function RentOrOwnTicketingPage() {
  return <ServicePage spec={SPEC} />;
}
