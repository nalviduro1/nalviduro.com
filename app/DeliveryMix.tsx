/**
 * PERS-27 (D-60): the delivery-mix figure — how Product Owner, Scrum/Agile and
 * Project Management principles become one approach per project. Full size it
 * opens How I work on /nalvi/project-management; `small` is the landing's
 * Project Management door. Inline SVG, no script: colours come from nalvi.css
 * (.nalvi-mix), the face from the page. English only, like /nalvi (PERS-01),
 * so its strings live here, as data the drawing is laid out from.
 */

type Hue = 'po' | 'sc' | 'pm';
type Pair = readonly [string, string];

const FULL_LABEL =
  'Three sources of practice, Product Owner, Scrum and Agile, and Project Management, feed one mix. A reading of the project sets one dial per source. The mix becomes that project’s roles, cadence, artifacts, reporting and gates, and each retrospective re-tunes the dials. Three example projects below show the same sources at different settings.';
const SMALL_LABEL =
  'One mix per project: Product Owner, Scrum and Agile, and Project Management each on a dial, set after reading the project, becoming that project’s roles, cadence, artifacts, reporting and gates.';

// 1 · Read the project: five questions, each with the two ends of its answer.
const READ_EYEBROW = '1 · READ THE PROJECT';
const READ_CELLS: readonly { q: Pair; a: Pair }[] = [
  {
    q: ['How clear is', 'the goal?'],
    a: ['known deliverable', '↔ open question'],
  },
  {
    q: ['How fixed are', 'date and budget?'],
    a: ['grant deadline', '↔ flexible'],
  },
  {
    q: ['Who has to read', 'the plan?'],
    a: ['lab · engineers', 'funder · partner'],
  },
  {
    q: ['How does the team', 'work today?'],
    a: ['notebooks', '↔ practiced sprints'],
  },
  {
    q: ['What must be', 'provable?'],
    a: ['reproducibility', 'QC · audit trail'],
  },
];
const READ_ARROW = 'sets each dial';

// The three sources, in the order they stack; each has a dial of its own.
type Source = {
  hue: Hue;
  title: string;
  owns: string;
  points: readonly string[];
  feeds: string;
  label: string;
  label2?: string;
  light: string;
  heavy: string;
};
const SOURCES: readonly Source[] = [
  {
    hue: 'po',
    title: 'PRODUCT OWNER',
    owns: 'owns the what and the why',
    points: [
      '– Vision and a roadmap people can read',
      '– One prioritized backlog',
      '– Requirements with acceptance criteria',
      '– Decides the order, says no',
    ],
    feeds: 'what and why',
    label: 'Product Owner',
    light: 'light · advise whoever owns the backlog',
    heavy: 'heavy · own the backlog and the order of work',
  },
  {
    hue: 'sc',
    title: 'SCRUM · AGILE',
    owns: 'owns the rhythm',
    points: [
      '– Short cycles, a working increment each',
      '– Definition of done',
      '– Daily sync, review, retrospective',
      '– Inspect and adapt, every cycle',
    ],
    feeds: 'rhythm',
    label: 'Scrum · Agile',
    light: 'light · milestones and reviews only',
    heavy: 'heavy · full sprint cadence, daily sync, retro',
  },
  {
    hue: 'pm',
    title: 'PROJECT MANAGEMENT',
    owns: 'owns the bounds',
    points: [
      '– Scope, schedule, budget',
      '– Risk register',
      '– Stakeholder plan, status reports',
      '– Milestone gates and the handover',
    ],
    feeds: 'bounds',
    label: 'Project',
    label2: 'Management',
    light: 'light · a plan and a one-page status',
    heavy: 'heavy · gates, risks, budget, change control',
  },
];

// 2 · Set the mix
const MIX_EYEBROW = '2 · SET THE MIX';
const MIX_NOTE = 'one dial per source · shown as set for project A';
const LIGHT = 'light';
const HEAVY = 'heavy';
const BECOMES = 'becomes';

// 3 · The approach
const APPROACH_EYEBROW = '3 · THE APPROACH FOR THIS PROJECT';
const APPROACH_NOTE = 'what the dials decide';
const APPROACH_ROWS: readonly { label: string; lines: Pair }[] = [
  {
    label: 'Roles',
    lines: ['who owns the backlog, who signs the plan,', 'who I answer to'],
  },
  {
    label: 'Cadence',
    lines: [
      'cycle length, review and retro rhythm,',
      'where the milestone gates fall',
    ],
  },
  {
    label: 'Artifacts',
    lines: [
      'backlog, roadmap, risk register,',
      'decision record, the plan itself',
    ],
  },
  {
    label: 'Reporting',
    lines: [
      'who reads which status, how often,',
      'in whose words: lab, engineer, funder',
    ],
  },
  {
    label: 'Gates',
    lines: ['acceptance criteria, QC gates,', 'milestone gates, the handover'],
  },
];

// 4 · Run it, and the loop back to the dials
const RUN_EYEBROW = '4 · RUN IT';
const RUN_LINE = 'status that matches reality · a retrospective each cycle';
const LOOP_LABEL =
  'retrospective each cycle · re-tune the dials, change the approach';

// The same sources at three settings: 0 is light, 1 is heavy, in SOURCES order.
const EXAMPLES_EYEBROW = 'SAME THREE SOURCES · THREE DIFFERENT MIXES';
type Example = {
  title: string;
  sub: string;
  mix: readonly [number, number, number];
  lines: readonly string[];
};
const EXAMPLE_A: Example = {
  title: 'A · Grant-funded software with a deadline',
  sub: 'a deliverable date, no one owning the schedule',
  mix: [0.5, 0.6, 0.93],
  lines: [
    'milestone gates, risk register,',
    'budget tracked per milestone;',
    'two-week sprints inside them;',
    'one backlog the funder can read',
  ],
};
const EXAMPLES: readonly Example[] = [
  EXAMPLE_A,
  {
    title: 'B · A lab whose analysis lives in scripts',
    sub: 'nobody else can rerun them',
    mix: [0.88, 0.55, 0.25],
    lines: [
      'backlog and acceptance criteria',
      'first; done means it reruns;',
      'weekly cycles with QC gates;',
      'one-page status, no budget line',
    ],
  },
  {
    title: 'C · A data science team, no backlog owner',
    sub: 'builds well, no one owns what comes next',
    mix: [0.95, 0.9, 0.18],
    lines: [
      'a fractional product owner',
      'inside their existing sprints;',
      'a roadmap people can read;',
      'status rides the sprint review',
    ],
  },
];
const MINI_LABELS: readonly string[] = ['PO', 'Scrum', 'PM'];
/** The main flow shows the dials as set for the first example. */
const SHOWN = EXAMPLE_A.mix;

// The small version's own words.
const SMALL_TITLE = 'One mix per project';
const SMALL_MIX = 'SET THE MIX';
const SMALL_APPROACH = 'APPROACH';
const SMALL_THIS = 'this project';
const SMALL_FOOT = 'read the project · set the dials · run it · re-tune';

function Arrowhead({ id }: { id: string }) {
  return (
    <defs>
      <marker
        id={id}
        viewBox="0 0 10 10"
        refX="9"
        refY="5"
        markerWidth="7"
        markerHeight="7"
        orient="auto-start-reverse"
      >
        <path d="M0 0 L10 5 L0 10 z" className="mx-head" />
      </marker>
    </defs>
  );
}

/** A dial: the track, the filled part and the dot, at `v` in 0…1. */
function Dial({
  hue,
  x,
  y,
  length,
  v,
  r,
}: {
  hue: Hue;
  x: number;
  y: number;
  length: number;
  v: number;
  r: number;
}) {
  const at = x + length * v;
  return (
    <>
      <line className="mx-track" x1={x} y1={y} x2={x + length} y2={y} />
      <line
        className={`mx-track mx-fill-${hue}`}
        x1={x}
        y1={y}
        x2={at}
        y2={y}
      />
      <circle className={`mx-dot mx-dot-${hue}`} cx={at} cy={y} r={r} />
    </>
  );
}

function Full() {
  const end = 'url(#mx-arrow)';
  return (
    <svg
      className="nalvi-mix nalvi-mix--full"
      viewBox="0 0 1240 836"
      role="img"
      aria-label={FULL_LABEL}
    >
      <Arrowhead id="mx-arrow" />

      <rect className="mx-box" x="20" y="16" width="700" height="114" rx="6" />
      <text className="mx-eyebrow" x="36" y="38">
        {READ_EYEBROW}
      </text>
      {READ_CELLS.map((c, i) => {
        const x = 36 + i * 137;
        return (
          <g key={c.q[0]}>
            {i > 0 && (
              <line className="mx-sep" x1={x - 8} y1="52" x2={x - 8} y2="118" />
            )}
            <text className="mx-t-q" x={x} y="66">
              {c.q[0]}
            </text>
            <text className="mx-t-q" x={x} y="82">
              {c.q[1]}
            </text>
            <text className="mx-t-sm" x={x} y="102">
              {c.a[0]}
            </text>
            <text className="mx-t-sm" x={x} y="116">
              {c.a[1]}
            </text>
          </g>
        );
      })}
      <line
        className="mx-arrow"
        x1="555"
        y1="130"
        x2="555"
        y2="166"
        markerEnd={end}
      />
      <text className="mx-t-sm" x="563" y="152">
        {READ_ARROW}
      </text>

      <rect
        className="mx-box"
        x="390"
        y="168"
        width="330"
        height="444"
        rx="6"
      />
      <text className="mx-eyebrow" x="406" y="190">
        {MIX_EYEBROW}
      </text>
      <text className="mx-t-sm" x="406" y="206">
        {MIX_NOTE}
      </text>
      {SOURCES.map((s, i) => {
        const y = 168 + i * 154;
        const c = y + 68;
        return (
          <g key={s.hue}>
            <rect
              className="mx-box"
              x="20"
              y={y}
              width="290"
              height="136"
              rx="6"
            />
            <rect
              className={`mx-stripe-${s.hue}`}
              x="28"
              y={y + 12}
              width="4"
              height="112"
              rx="2"
            />
            <text className="mx-t-title" x="44" y={y + 24}>
              {s.title}
            </text>
            <text className="mx-t-sm" x="44" y={y + 40}>
              {s.owns}
            </text>
            {s.points.map((p, k) => (
              <text key={p} className="mx-t" x="44" y={y + 66 + k * 18}>
                {p}
              </text>
            ))}
            <line
              className="mx-arrow"
              x1="310"
              y1={c}
              x2="388"
              y2={c}
              markerEnd={end}
            />
            <text className="mx-t-sm" x="349" y={c - 7} textAnchor="middle">
              {s.feeds}
            </text>
            {s.label2 ? (
              <>
                <text className="mx-t-label" x="498" y={c - 4} textAnchor="end">
                  {s.label}
                </text>
                <text
                  className="mx-t-label"
                  x="498"
                  y={c + 10}
                  textAnchor="end"
                >
                  {s.label2}
                </text>
              </>
            ) : (
              <text className="mx-t-label" x="498" y={c + 4} textAnchor="end">
                {s.label}
              </text>
            )}
            <Dial
              hue={s.hue}
              x={512}
              y={c}
              length={180}
              v={SHOWN[i] ?? 0}
              r={7}
            />
            <text className="mx-t-sm" x="512" y={c + 18}>
              {LIGHT}
            </text>
            <text className="mx-t-sm" x="692" y={c + 18} textAnchor="end">
              {HEAVY}
            </text>
            <text className="mx-t-sm" x="406" y={c + 40}>
              {s.light}
            </text>
            <text className="mx-t-sm" x="406" y={c + 54}>
              {s.heavy}
            </text>
          </g>
        );
      })}

      <line
        className="mx-arrow"
        x1="720"
        y1="390"
        x2="798"
        y2="390"
        markerEnd={end}
      />
      <text className="mx-t-sm" x="759" y="383" textAnchor="middle">
        {BECOMES}
      </text>

      <rect
        className="mx-box"
        x="800"
        y="168"
        width="420"
        height="366"
        rx="6"
      />
      <text className="mx-eyebrow" x="816" y="190">
        {APPROACH_EYEBROW}
      </text>
      <text className="mx-t-sm" x="816" y="206">
        {APPROACH_NOTE}
      </text>
      {APPROACH_ROWS.map((r, i) => {
        const y = 240 + i * 60;
        return (
          <g key={r.label}>
            <text className="mx-t-label" x="816" y={y}>
              {r.label}
            </text>
            <text className="mx-t" x="900" y={y}>
              {r.lines[0]}
            </text>
            <text className="mx-t" x="900" y={y + 16}>
              {r.lines[1]}
            </text>
            {i < APPROACH_ROWS.length - 1 && (
              <line
                className="mx-sep"
                x1="816"
                y1={y + 30}
                x2="1204"
                y2={y + 30}
              />
            )}
          </g>
        );
      })}
      <line
        className="mx-arrow"
        x1="1010"
        y1="534"
        x2="1010"
        y2="560"
        markerEnd={end}
      />

      <rect className="mx-box" x="800" y="562" width="420" height="50" rx="6" />
      <text className="mx-eyebrow" x="816" y="582">
        {RUN_EYEBROW}
      </text>
      <text className="mx-t" x="816" y="600">
        {RUN_LINE}
      </text>
      <path className="mx-arrow" d="M1010 612 V640 H555 V614" markerEnd={end} />
      <text className="mx-t-sm" x="782" y="634" textAnchor="middle">
        {LOOP_LABEL}
      </text>

      <text className="mx-eyebrow-muted" x="20" y="672">
        {EXAMPLES_EYEBROW}
      </text>
      {EXAMPLES.map((e, i) => {
        const x = 20 + i * 406;
        return (
          <g key={e.title}>
            <rect
              className="mx-box"
              x={x}
              y="684"
              width="386"
              height="136"
              rx="6"
            />
            <text className="mx-t-label" x={x + 16} y="708">
              {e.title}
            </text>
            <text className="mx-t-sm" x={x + 16} y="724">
              {e.sub}
            </text>
            {SOURCES.map((s, k) => (
              <g key={s.hue}>
                <text
                  className="mx-t-mini"
                  x={x + 56}
                  y={754 + k * 18}
                  textAnchor="end"
                >
                  {MINI_LABELS[k]}
                </text>
                <Dial
                  hue={s.hue}
                  x={x + 66}
                  y={750 + k * 18}
                  length={100}
                  v={e.mix[k] ?? 0}
                  r={5}
                />
              </g>
            ))}
            {e.lines.map((l, k) => (
              <text key={l} className="mx-t-xs" x={x + 184} y={754 + k * 16}>
                {l}
              </text>
            ))}
          </g>
        );
      })}
    </svg>
  );
}

function Small() {
  const end = 'url(#mxs-arrow)';
  return (
    <svg
      className="nalvi-mix nalvi-mix--small"
      viewBox="0 0 400 250"
      role="img"
      aria-label={SMALL_LABEL}
    >
      <Arrowhead id="mxs-arrow" />
      <text className="mx-t-big" x="10" y="28">
        {SMALL_TITLE}
      </text>

      <rect className="mx-box" x="164" y="46" width="122" height="170" rx="5" />
      {SOURCES.map((s, i) => {
        const c = 78 + i * 54;
        return (
          <g key={s.hue}>
            <rect
              className="mx-box"
              x="10"
              y={c - 17}
              width="134"
              height="34"
              rx="5"
            />
            <rect
              className={`mx-stripe-${s.hue}`}
              x="17"
              y={c - 10}
              width="4"
              height="20"
              rx="2"
            />
            {s.label2 ? (
              <>
                <text className="mx-t-chip2" x="29" y={c - 3}>
                  {s.label}
                </text>
                <text className="mx-t-chip2" x="29" y={c + 11}>
                  {s.label2}
                </text>
              </>
            ) : (
              <text className="mx-t-chip" x="29" y={c + 5}>
                {s.label}
              </text>
            )}
            <line
              className="mx-arrow"
              x1="144"
              y1={c}
              x2="162"
              y2={c}
              markerEnd={end}
            />
            <Dial
              hue={s.hue}
              x={178}
              y={c}
              length={94}
              v={SHOWN[i] ?? 0}
              r={5.5}
            />
          </g>
        );
      })}

      <text className="mx-eyebrow" x="172" y="64">
        {SMALL_MIX}
      </text>
      <text className="mx-t-mini" x="178" y="206">
        {LIGHT}
      </text>
      <text className="mx-t-mini" x="272" y="206" textAnchor="end">
        {HEAVY}
      </text>
      <line
        className="mx-arrow"
        x1="286"
        y1="132"
        x2="306"
        y2="132"
        markerEnd={end}
      />

      <rect className="mx-box" x="308" y="46" width="84" height="170" rx="5" />
      <text className="mx-eyebrow" x="316" y="64">
        {SMALL_APPROACH}
      </text>
      {APPROACH_ROWS.map((r, i) => (
        <text key={r.label} className="mx-t-chip" x="316" y={90 + i * 22}>
          {r.label}
        </text>
      ))}
      <text className="mx-t-mini" x="316" y="206">
        {SMALL_THIS}
      </text>

      <text className="mx-t-foot" x="10" y="240">
        {SMALL_FOOT}
      </text>
    </svg>
  );
}

export function DeliveryMix({ small = false }: { small?: boolean }) {
  return small ? <Small /> : <Full />;
}
