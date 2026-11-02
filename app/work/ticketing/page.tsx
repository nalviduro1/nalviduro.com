import { ServicePage, serviceMetadata } from '../../services/ServicePage';
import type { ServiceSpec } from '../../services/shared';

/**
 * Plan item 4: the payments and ticketing proof page. A short account, with one
 * diagram, of how ticket sales on pakezdrite.com are designed (pakezdrite D-30,
 * TIX-08…TIX-17). No keys, no account ids, no rates: the fee is mentioned, not
 * quoted (this site states nothing financial).
 */

const STEPS: readonly {
  title: string;
  lines: readonly string[];
  optional?: boolean;
}[] = [
  {
    title: '1  Purchase',
    lines: [
      'Buyer pays on Stripe’s checkout page.',
      'A direct charge on the organizer’s own',
      'Stripe account. Card data never reaches us.',
    ],
  },
  {
    title: '2  Confirmation email',
    lines: [
      'Stripe sends a signed notice; the order is',
      'recorded once. The buyer is emailed the',
      'ticket code and the seller’s name.',
    ],
  },
  {
    title: '3  Refund',
    optional: true,
    lines: [
      'The organizer refunds from their orders page',
      'or Stripe dashboard; both are recorded. If an',
      'event is cancelled, buyers are told.',
    ],
  },
  {
    title: '4  Payout',
    lines: [
      'The money settles in the organizer’s Stripe',
      'balance and Stripe pays it to their bank.',
      'Only the platform fee reaches the site.',
    ],
  },
];

const BOX_H = 108;
const GAP = 32;
const TOP = 12;

function TicketFlow() {
  const height = TOP * 2 + STEPS.length * BOX_H + (STEPS.length - 1) * GAP;
  return (
    <svg
      viewBox={`0 0 360 ${height}`}
      role="img"
      aria-labelledby="ticket-flow-title ticket-flow-desc"
      style={{ width: '100%', maxWidth: '30rem', height: 'auto' }}
    >
      <title id="ticket-flow-title">
        Ticket sale: purchase, confirmation email, refund, payout
      </title>
      <desc id="ticket-flow-desc">
        Four steps in order. Purchase on the organizer’s own Stripe account;
        confirmation email with a ticket code; refund by the organizer if
        needed; payout from Stripe to the organizer’s bank.
      </desc>
      {STEPS.map((s, i) => {
        const y = TOP + i * (BOX_H + GAP);
        return (
          <g key={s.title}>
            <rect
              x={20}
              y={y}
              width={320}
              height={BOX_H}
              rx={8}
              fill="rgba(100, 255, 218, 0.06)"
              stroke="var(--nalvi-accent)"
              strokeWidth={1.5}
              strokeDasharray={s.optional ? '5 4' : undefined}
            />
            <text
              x={34}
              y={y + 26}
              fill="var(--nalvi-strong)"
              fontSize={15}
              fontWeight={600}
            >
              {s.title}
              {s.optional ? '  (if needed)' : ''}
            </text>
            {s.lines.map((line, j) => (
              <text
                key={line}
                x={34}
                y={y + 50 + j * 17}
                fill="var(--nalvi-muted)"
                fontSize={12.5}
              >
                {line}
              </text>
            ))}
            {i < STEPS.length - 1 && (
              <g
                stroke="var(--nalvi-accent)"
                fill="var(--nalvi-accent)"
                strokeWidth={1.5}
              >
                <line
                  x1={180}
                  y1={y + BOX_H + 2}
                  x2={180}
                  y2={y + BOX_H + GAP - 8}
                />
                <path
                  d={`M174 ${y + BOX_H + GAP - 9} L180 ${y + BOX_H + GAP - 1} L186 ${y + BOX_H + GAP - 9} Z`}
                />
              </g>
            )}
          </g>
        );
      })}
    </svg>
  );
}

const SPEC: ServiceSpec = {
  path: '/work/ticketing',
  title: 'Ticketing and payments',
  description:
    'How a ticket sale moves from purchase to payout on pakezdrite.com: the organizer is the seller, the money never passes through the platform.',
  eyebrow: 'Work · Payments',
  headline: 'How a ticket sale moves, from purchase to payout.',
  lead: 'This is the ticketing design I built for pakezdrite.com, where event organizers sell tickets to their own events. The organizer is the seller, and the ticket money never passes through the platform. Below is the path one ticket takes.',
  lean: true,
  fieldsTitle: 'What to know',
  fields: [
    {
      title: 'The organizer is the seller',
      body: 'Each organizer links their own Stripe account. Their name is on the buyer’s statement, and refunds, disputes and tax forms are theirs. For an events business that is the right default: the money and the customer relationship stay with the business.',
    },
    {
      title: 'Why it is built this way',
      body: 'A platform that holds ticket money also carries the disputes and negative balances. A direct charge keeps that with the seller. The platform takes a small per-ticket fee, paid by the organizer and never added to the buyer’s price.',
    },
    {
      title: 'Where it stands',
      body: 'Built and deployed, with selling switched off, and a fake payment provider so the whole path is tested without a live account. Real selling is not open yet: it needs the platform’s Stripe account and the terms wording first.',
    },
  ],
  topFigure: {
    figure: <TicketFlow />,
    caption:
      'One ticket, in order: purchase, confirmation email, refund if needed, payout. No card data passes through the site, and the only money that reaches it is the platform fee.',
  },
  who: [],
  services: [],
  cases: [],
  tools: [],
  faq: [],
  close: {
    title: 'Selling tickets for your events?',
    body: 'Tell me what you sell and I will tell you whether to rent a ticketing service or own the flow.',
  },
  subject: 'Ticketing and payments',
};

export const metadata = serviceMetadata(SPEC);

export default function TicketingPage() {
  return <ServicePage spec={SPEC} />;
}
