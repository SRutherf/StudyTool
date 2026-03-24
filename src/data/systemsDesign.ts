import type { SectionData } from './types'

export const systemsDesignSection: SectionData = {
  id: 'systems-design',
  title: 'Systems Design',
  description: 'Architecture, scaling, and tradeoff analysis',
  subsections: {
    requirements: {
      title: 'Requirements',
      description: 'Clarifying scope, constraints, and success criteria',
      explanation:
        'Requirements gathering is the first and most important part of a systems design interview. Before proposing databases, caches, or message queues, you need to understand what system you are actually building, who uses it, what scale matters, and what tradeoffs are acceptable. Strong candidates separate functional requirements from non-functional requirements, clarify what is in scope versus out of scope, and identify the success criteria that will drive later architecture decisions. This step prevents premature design and gives you a framework for justifying every later choice.',
      vocab: [
        {
          term: 'functional requirements',
          definition:
            'The core features the system must provide, such as creating posts, sending messages, or retrieving a feed.',
        },
        {
          term: 'non-functional requirements',
          definition:
            'Quality attributes like scalability, latency, availability, durability, and security.',
        },
        {
          term: 'scope',
          definition:
            'The set of features and concerns included in the design discussion.',
        },
        {
          term: 'out of scope',
          definition:
            'Features or edge cases intentionally excluded so the design stays focused.',
        },
        {
          term: 'use case',
          definition:
            'A concrete way a user or system interacts with the product.',
        },
        {
          term: 'actor',
          definition:
            'A user, client, admin, or service that interacts with the system.',
        },
        {
          term: 'success criteria',
          definition:
            'The measurable outcomes the system should achieve, such as response-time targets or uptime goals.',
        },
        {
          term: 'latency',
          definition:
            'How long it takes for the system to respond to a request.',
        },
        {
          term: 'throughput',
          definition:
            'How many requests, events, or operations the system can handle over time.',
        },
        {
          term: 'availability',
          definition:
            'The proportion of time the system remains operational and accessible.',
        },
        {
          term: 'durability',
          definition:
            'The guarantee that acknowledged data will not be lost.',
        },
        {
          term: 'consistency',
          definition:
            'How up-to-date and synchronized reads are after writes across the system.',
        },
        {
          term: 'read-heavy',
          definition:
            'A workload where reads greatly outnumber writes.',
        },
        {
          term: 'write-heavy',
          definition:
            'A workload where writes or updates are especially frequent.',
        },
        {
          term: 'SLA',
          definition:
            'Service Level Agreement, a formal uptime or performance commitment.',
        },
        {
          term: 'SLO',
          definition:
            'Service Level Objective, an internal reliability or performance target.',
        },
        {
          term: 'tradeoff',
          definition:
            'A decision where improving one property, such as consistency, may worsen another, such as latency.',
        },
        {
          term: 'multi-tenant',
          definition:
            'A system architecture where many customers share the same infrastructure.',
        },
        {
          term: 'compliance',
          definition:
            'Legal or regulatory constraints such as GDPR, HIPAA, or data residency requirements.',
        },
        {
          term: 'backward compatibility',
          definition:
            'The ability to evolve the system without breaking older clients or integrations.',
        },
      ],
      questions: [
        {
          id: 'sd-req-1',
          prompt:
            'At the start of a systems design interview, what should you do before proposing components like caches, queues, or databases?',
          choices: [
            'Clarify requirements, scope, and success criteria',
            'Immediately draw the database schema',
            'Choose microservices to show scale readiness',
            'Start with a CDN because every system needs one',
          ],
          correctIndex: 0,
          explanation:
            'The first step should be clarifying what the system must do, who uses it, what scale matters, and which qualities matter most. Without that, design decisions are ungrounded. For example, a highly consistent financial ledger and a social media feed may look very different even at similar traffic levels because their requirements differ. Good interview performance usually starts with functional requirements, non-functional requirements, assumptions, and scope boundaries.',
        },
        {
          id: 'sd-req-2',
          prompt:
            'Which of the following is a non-functional requirement rather than a functional requirement?',
          choices: [
            '99.99% availability',
            'Users can upload profile photos',
            'Users can follow each other',
            'Admins can delete abusive content',
          ],
          correctIndex: 0,
          explanation:
            'Availability is a quality attribute, so it is a non-functional requirement. The other options describe features the system provides, which makes them functional requirements. This distinction matters because non-functional requirements drive architecture tradeoffs such as replication, failover, caching, and consistency strategies.',
        },
        {
          id: 'sd-req-3',
          prompt:
            'Why is explicitly stating what is out of scope valuable in a systems design interview?',
          choices: [
            'It keeps the design focused and prevents wasted time on lower-priority features',
            'It lets you avoid discussing hard topics permanently',
            'It proves the system does not need edge-case handling',
            'It removes the need to discuss assumptions',
          ],
          correctIndex: 0,
          explanation:
            'Defining out-of-scope items helps focus the discussion on the core system and prevents spending time on secondary features. It also shows prioritization. In interviews, you often cannot design every feature in full depth, so explicitly narrowing scope is a strength, not a weakness. You can still mention deferred features and how the design might evolve later.',
        },
        {
          id: 'sd-req-4',
          prompt:
            'If an interviewer says the system should support millions of users but low write frequency, which characteristic is most important to call out?',
          choices: [
            'It is likely a read-heavy workload',
            'It must use event sourcing',
            'It does not need indexes',
            'It should avoid caching',
          ],
          correctIndex: 0,
          explanation:
            'Millions of users with relatively infrequent writes often implies a read-heavy system. That immediately influences design choices such as caching, replicas, denormalized read models, or CDN use. The other options are unjustified leaps. Requirements should drive the architecture, not the other way around.',
        },
        {
          id: 'sd-req-5',
          prompt:
            'Which question best helps uncover an important non-functional requirement?',
          choices: [
            'What latency, scale, and availability targets matter most?',
            'Which programming language should I use?',
            'Should I name the service gateway first?',
            'Do you want me to assume Kubernetes?',
          ],
          correctIndex: 0,
          explanation:
            'Asking about latency, scale, and availability gets directly to the operating constraints that shape architecture. Technology choices should come later and only if relevant. In a systems design interview, the strongest clarifying questions are the ones that expose the constraints behind the solution.',
        },
        {
          id: 'sd-req-6',
          prompt:
            'A payment system and a photo-like counter both store writes. Which requirement difference most strongly affects architecture?',
          choices: [
            'Consistency and correctness requirements are much stricter for payments',
            'Photo likes always require stronger durability than payments',
            'Both should be designed identically because both are writes',
            'Counters usually need multi-region transactions more than payments',
          ],
          correctIndex: 0,
          explanation:
            'Both systems perform writes, but the tolerance for stale reads, duplicate operations, and lost updates is dramatically different. Payments usually need strong correctness, durable writes, auditability, and careful idempotency. A like counter often tolerates eventual consistency and approximate aggregation. This is exactly why requirements gathering must happen before architecture decisions.',
        },
        {
          id: 'sd-req-7',
          prompt:
            'Which statement is the best example of a measurable success criterion?',
          choices: [
            'P95 read latency should stay under 200 ms during peak traffic',
            'The system should feel pretty fast',
            'The design should be modern',
            'The database should be scalable somehow',
          ],
          correctIndex: 0,
          explanation:
            'A measurable success criterion is specific and testable. P95 under 200 ms gives a concrete target that can guide design decisions and later validation. Vague statements like “feel fast” are not useful because they cannot be evaluated objectively.',
        },
        {
          id: 'sd-req-8',
          prompt:
            'Why is it useful to ask whether the system is single-region or multi-region early in the interview?',
          choices: [
            'It changes failure modes, latency, replication, and consistency tradeoffs',
            'It only affects DNS naming',
            'It mostly determines frontend framework choice',
            'It is irrelevant unless the interviewer asks specifically about CDNs',
          ],
          correctIndex: 0,
          explanation:
            'Single-region versus multi-region deployment has major implications for architecture. It affects replication strategy, global routing, failover, data locality, latency, operational complexity, and consistency behavior. Clarifying this early can prevent you from making invalid assumptions later in the design.',
        },
        {
          id: 'sd-req-9',
          prompt:
            'Which of these is the best reason to identify the primary use cases before drawing the architecture?',
          choices: [
            'The hottest paths determine where optimization and complexity should go',
            'It eliminates the need to estimate scale',
            'It guarantees a relational database is the right choice',
            'It means background jobs can be ignored',
          ],
          correctIndex: 0,
          explanation:
            'Primary use cases reveal the critical request paths and data flows. That tells you what to optimize for and where complexity belongs. For example, if reads dominate and low latency matters, caching may deserve center stage. If writes and correctness dominate, transaction and consistency design become more important. Use cases are the bridge between requirements and architecture.',
        },
        {
          id: 'sd-req-10',
          prompt:
            'What is the best way to handle missing details when the interviewer leaves requirements ambiguous?',
          choices: [
            'State reasonable assumptions explicitly and continue',
            'Refuse to proceed until every detail is provided',
            'Guess silently and hope your assumptions match',
            'Avoid mentioning assumptions so the design sounds cleaner',
          ],
          correctIndex: 0,
          explanation:
            'In interviews, ambiguity is normal. Strong candidates make reasonable assumptions explicit, tie them to the design, and move forward. This shows structured thinking. Silent guessing is risky because the interviewer cannot evaluate your reasoning, and refusing to proceed wastes time.',
        },
      ],
    },
    estimation: {
      title: 'Estimation',
      description: 'Back-of-the-envelope sizing and capacity reasoning',
      explanation:
        'Estimation is how you turn vague scale requirements into concrete engineering decisions. In systems design interviews, you usually do not need perfect math, but you do need credible order-of-magnitude reasoning. Estimation helps you size databases, bandwidth, cache memory, queue depth, and request load. Strong candidates choose simple assumptions, say them out loud, and use them to reason about read QPS, write QPS, storage growth, hot keys, and network traffic. The goal is not arithmetic performance. The goal is showing that your architecture is grounded in realistic scale.',
      vocab: [
        {
          term: 'back-of-the-envelope',
          definition:
            'A rough but structured estimate used to reason about scale quickly.',
        },
        {
          term: 'QPS',
          definition:
            'Queries per second, a common measure of request rate.',
        },
        {
          term: 'RPS',
          definition:
            'Requests per second, often used interchangeably with QPS depending on context.',
        },
        {
          term: 'peak traffic',
          definition:
            'The highest expected load period rather than the average load.',
        },
        {
          term: 'average traffic',
          definition:
            'The mean request rate over time, usually lower than peak.',
        },
        {
          term: 'read-to-write ratio',
          definition:
            'The proportion of read requests compared with write requests.',
        },
        {
          term: 'bandwidth',
          definition:
            'The volume of data transferred per unit time across the network.',
        },
        {
          term: 'throughput',
          definition:
            'The number of operations or amount of data a system handles over time.',
        },
        {
          term: 'storage growth',
          definition:
            'How total stored data increases over time.',
        },
        {
          term: 'hot key',
          definition:
            'A disproportionately popular key or object that receives unusually high traffic.',
        },
        {
          term: 'working set',
          definition:
            'The subset of data frequently accessed and worth keeping in memory or cache.',
        },
        {
          term: 'fan-out',
          definition:
            'How many downstream writes, reads, or deliveries one action triggers.',
        },
        {
          term: 'payload size',
          definition:
            'The approximate amount of data in a request, response, or event.',
        },
        {
          term: 'capacity planning',
          definition:
            'Estimating resource needs such as compute, storage, and network to support load safely.',
        },
        {
          term: 'headroom',
          definition:
            'Extra capacity reserved above expected load to handle spikes and failures.',
        },
        {
          term: 'replication factor',
          definition:
            'How many copies of the data are stored for availability or durability.',
        },
        {
          term: 'daily active users',
          definition:
            'The number of unique users active in a typical day.',
        },
        {
          term: 'retention period',
          definition:
            'How long data is kept before deletion or archival.',
        },
        {
          term: 'order of magnitude',
          definition:
            'The rough scale level of a quantity, often good enough for interview sizing.',
        },
        {
          term: 'burstiness',
          definition:
            'Traffic arriving unevenly in spikes instead of at a smooth average rate.',
        },
      ],
      questions: [
        {
          id: 'sd-est-1',
          prompt:
            'Why do back-of-the-envelope calculations matter in a systems design interview?',
          choices: [
            'They ground architecture choices in realistic scale',
            'They replace the need to discuss requirements',
            'They prove the exact hardware model you must buy',
            'They are mostly for impressing the interviewer with arithmetic',
          ],
          correctIndex: 0,
          explanation:
            'The value of estimation is that it turns vague scale into concrete reasoning. If you estimate that a service sees 500K reads per second with large payloads, you may need aggressive caching and CDN use. If writes are tiny and infrequent, the architecture can be simpler. Estimation is about validating the design, not about exact math.',
        },
        {
          id: 'sd-est-2',
          prompt:
            'If a system has 10 million daily active users and each user makes 10 requests per day on average, what is the average requests per second roughly?',
          choices: [
            'About 1,200 RPS',
            'About 120,000 RPS',
            'About 12 RPS',
            'About 12 million RPS',
          ],
          correctIndex: 0,
          explanation:
            '10 million users × 10 requests per day gives 100 million requests per day. Divide by 86,400 seconds in a day and you get roughly 1,157 requests per second, which is about 1,200 RPS. In an interview, that average is useful, but you should usually also estimate peak traffic, which could be several times higher.',
        },
        {
          id: 'sd-est-3',
          prompt:
            'Why should you usually size for peak traffic and not just average traffic?',
          choices: [
            'Systems fail under spikes, not under calm averages',
            'Average traffic is always irrelevant',
            'Peak traffic only matters for frontend systems',
            'Average and peak are usually the same in production',
          ],
          correctIndex: 0,
          explanation:
            'Average traffic can hide the real operational risk. Capacity planning should account for bursts, diurnal patterns, flash crowds, or regional failover. If your average is 1,000 RPS but your peak is 8,000 RPS, designing only for the average will lead to overload or poor performance during real usage.',
        },
        {
          id: 'sd-est-4',
          prompt:
            'A system stores 5 million new objects per day, each object averaging 2 KB. Ignoring replication, about how much raw storage does one day consume?',
          choices: [
            'About 10 GB',
            'About 100 MB',
            'About 1 TB',
            'About 10 TB',
          ],
          correctIndex: 0,
          explanation:
            '5 million × 2 KB = 10 million KB, which is roughly 10 GB. In practice, you would also consider indexing overhead, metadata, compression, and replication. But this quick estimate is enough to reason about storage growth rate in an interview.',
        },
        {
          id: 'sd-est-5',
          prompt:
            'If each write is replicated to three copies, what happens to raw storage requirements?',
          choices: [
            'They increase by roughly 3× before considering overhead',
            'They stay the same because replicas are logical only',
            'They decrease because reads get distributed',
            'They only affect compute, not storage',
          ],
          correctIndex: 0,
          explanation:
            'A replication factor of three means each piece of data is stored three times, so storage requirements grow by about 3× before considering indexes, metadata, and other overhead. Replication improves availability and durability, but it has a direct storage cost.',
        },
        {
          id: 'sd-est-6',
          prompt:
            'Which estimate is most useful when deciding whether a cache can hold the hot portion of the data?',
          choices: [
            'Working set size',
            'Total lifetime data ever produced',
            'Source code size',
            'Number of engineers on the team',
          ],
          correctIndex: 0,
          explanation:
            'For caching, the critical question is not total historical data size but how much frequently accessed data exists at one time. That is the working set. If the hot set fits in memory, the cache can be very effective. If it does not, the hit rate may be poor unless you narrow the cached data further.',
        },
        {
          id: 'sd-est-7',
          prompt:
            'A feed service fans one write event out to 1,000 followers on average. Why is that estimate important?',
          choices: [
            'It can multiply write load dramatically and change architecture choices',
            'It only affects frontend rendering',
            'It means the system no longer needs a database',
            'It guarantees push-based fan-out is always wrong',
          ],
          correctIndex: 0,
          explanation:
            'Fan-out can magnify workload significantly. One user action may create many downstream writes, notifications, or queue messages. Estimating that multiplier helps determine whether push-based fan-out, pull-based fan-out, hybrid strategies, or asynchronous processing are necessary.',
        },
        {
          id: 'sd-est-8',
          prompt:
            'What is the main reason to estimate payload size for requests and responses?',
          choices: [
            'It affects bandwidth, latency, and storage costs',
            'It determines programming language syntax',
            'It eliminates the need for compression',
            'It only matters for logs',
          ],
          correctIndex: 0,
          explanation:
            'Payload size directly impacts bandwidth requirements and can materially affect latency, especially across networks or between services. It also matters for storage if payloads are persisted. A design with tiny metadata objects behaves very differently from one serving large media files or large JSON responses.',
        },
        {
          id: 'sd-est-9',
          prompt:
            'If your rough estimates are uncertain, what is the best interview behavior?',
          choices: [
            'State assumptions clearly and reason with approximate ranges',
            'Avoid estimation entirely because it may be wrong',
            'Pretend the numbers are exact to sound more confident',
            'Use the largest numbers possible so the design sounds impressive',
          ],
          correctIndex: 0,
          explanation:
            'Interview estimation is about structured reasoning, not exact forecasting. The best approach is to make assumptions explicit, use round numbers, and carry the implications into the architecture. Approximate but coherent reasoning is much stronger than fake precision or skipping the exercise.',
        },
        {
          id: 'sd-est-10',
          prompt:
            'Why is adding headroom important during capacity planning?',
          choices: [
            'Because traffic spikes, node failures, and growth can exceed baseline estimates',
            'Because systems should always run at 100% utilization',
            'Because headroom replaces monitoring',
            'Because storage never needs replication when headroom exists',
          ],
          correctIndex: 0,
          explanation:
            'Headroom gives the system a safety margin for spikes, unexpected growth, noisy neighbors, maintenance events, and partial outages. Designing exactly to the estimated average or even peak can still be risky if one instance fails or traffic is burstier than expected.',
        },
      ],
    },
    dataModeling: {
      title: 'Data Modeling',
      description:
        'Entities, relationships, and access-pattern-driven schema design',
      explanation:
        'Data modeling in systems design is about organizing information so the system can serve its most important access patterns efficiently and correctly. Strong candidates do not start with abstract database theory alone. They first identify the core entities, how those entities relate to one another, and which reads and writes matter most. The schema should be shaped by the queries the product actually needs, not by a desire for perfect normalization in all cases. In interviews, good data modeling means choosing sensible primary keys, deciding what should be embedded versus referenced, understanding one-to-one, one-to-many, and many-to-many relationships, and calling out where denormalization may be worth the cost for performance or simplicity.',
      vocab: [
        {
          term: 'entity',
          definition:
            'A core object in the system, such as a user, post, order, or message.',
        },
        {
          term: 'attribute',
          definition:
            'A field or property of an entity, such as userId, title, or createdAt.',
        },
        {
          term: 'primary key',
          definition:
            'The unique identifier used to distinguish each record in a table or collection.',
        },
        {
          term: 'foreign key',
          definition:
            'A field that references the primary key of another entity to represent a relationship.',
        },
        {
          term: 'one-to-one',
          definition:
            'A relationship where one record maps to exactly one related record.',
        },
        {
          term: 'one-to-many',
          definition:
            'A relationship where one record can be associated with many related records.',
        },
        {
          term: 'many-to-many',
          definition:
            'A relationship where records on both sides can be associated with many records on the other side.',
        },
        {
          term: 'join table',
          definition:
            'An intermediate table used to model many-to-many relationships.',
        },
        {
          term: 'normalization',
          definition:
            'Structuring data to reduce redundancy and improve consistency.',
        },
        {
          term: 'denormalization',
          definition:
            'Duplicating or restructuring data to improve read performance or simplify access patterns.',
        },
        {
          term: 'access pattern',
          definition:
            'The way the application reads or writes data in practice.',
        },
        {
          term: 'schema',
          definition:
            'The structure of stored data, including fields, types, and relationships.',
        },
        {
          term: 'partition key',
          definition:
            'The key used to distribute data across shards or partitions.',
        },
        {
          term: 'sort key',
          definition:
            'A secondary key used to order or group records within a partition.',
        },
        {
          term: 'composite key',
          definition:
            'A key made from multiple fields used together for uniqueness or lookup.',
        },
        {
          term: 'cardinality',
          definition:
            'The nature or count relationship between entities, such as one-to-many.',
        },
        {
          term: 'materialized view',
          definition:
            'A precomputed representation of data designed for a specific query pattern.',
        },
        {
          term: 'embedding',
          definition:
            'Storing related data together inside the same document or record.',
        },
        {
          term: 'referencing',
          definition:
            'Storing links between records instead of embedding full related data.',
        },
        {
          term: 'secondary index',
          definition:
            'An additional lookup structure that supports queries beyond the primary key.',
        },
      ],
      questions: [
        {
          id: 'sd-dm-1',
          prompt:
            'What should primarily drive your data model in a systems design interview?',
          choices: [
            'The system’s access patterns and core queries',
            'A desire to use as many tables as possible',
            'The interviewer’s favorite database brand',
            'The goal of eliminating every duplicated field no matter the cost',
          ],
          correctIndex: 0,
          explanation:
            'A strong data model is shaped by how the application actually reads and writes data. If the main user flow requires fetching a timeline, looking up a profile, or listing recent orders, the schema should support those efficiently. Pure theoretical cleanliness matters less than serving real product access patterns well.',
        },
        {
          id: 'sd-dm-2',
          prompt:
            'Which relationship is best described as one user having many posts?',
          choices: ['One-to-many', 'One-to-one', 'Many-to-many', 'Keyless'],
          correctIndex: 0,
          explanation:
            'One user can own many posts, while each post typically belongs to one user. That is a classic one-to-many relationship. Identifying relationship shape is a basic but important part of schema design.',
        },
        {
          id: 'sd-dm-3',
          prompt:
            'When is denormalization often a reasonable choice?',
          choices: [
            'When faster reads for common queries are worth some redundancy',
            'Only when relational databases are unavailable',
            'Whenever you want to avoid thinking about consistency',
            'Never, because duplication is always bad design',
          ],
          correctIndex: 0,
          explanation:
            'Denormalization is often useful when a system is read-heavy and repeatedly needs data that would otherwise require expensive joins or many lookups. It introduces duplication, so you must manage update consistency carefully, but it can materially improve performance and simplify read paths.',
        },
        {
          id: 'sd-dm-4',
          prompt:
            'What is the main purpose of a primary key?',
          choices: [
            'To uniquely identify each record',
            'To compress records automatically',
            'To replicate records across regions',
            'To replace all indexes',
          ],
          correctIndex: 0,
          explanation:
            'A primary key gives each record a unique identity. It is foundational for retrieval, integrity, and relationships. In many schemas, many later design choices such as partitioning and indexing build on the primary key decision.',
        },
        {
          id: 'sd-dm-5',
          prompt:
            'Which scenario most likely requires a join table?',
          choices: [
            'Students can enroll in many courses, and each course has many students',
            'Each user has one profile picture',
            'Each order belongs to one customer',
            'Each message has one sender',
          ],
          correctIndex: 0,
          explanation:
            'A many-to-many relationship is commonly modeled with a join table. In this example, neither side can simply hold a single foreign key because each student can link to many courses and each course can link to many students.',
        },
        {
          id: 'sd-dm-6',
          prompt:
            'Why is choosing a good partition key important in distributed data systems?',
          choices: [
            'It affects data distribution, scaling, and hotspot risk',
            'It only matters for frontend rendering',
            'It removes the need for indexes',
            'It guarantees strong consistency automatically',
          ],
          correctIndex: 0,
          explanation:
            'The partition key determines how data spreads across nodes. A poor choice can create hotspots where a small subset of servers receives disproportionate load. A good partition key helps balance traffic and storage more evenly.',
        },
        {
          id: 'sd-dm-7',
          prompt:
            'When might embedding related data make more sense than referencing it?',
          choices: [
            'When the related data is small and usually fetched together',
            'When the related data changes independently at high frequency',
            'When the system must support many unrelated query paths on the child object',
            'When storage duplication is strictly forbidden',
          ],
          correctIndex: 0,
          explanation:
            'Embedding works well when related data is small, tightly coupled, and commonly read together. It can reduce lookup complexity and improve read performance. Referencing is often better when related data is large, shared, or updated independently.',
        },
        {
          id: 'sd-dm-8',
          prompt:
            'What is the biggest issue with modeling data without thinking about query patterns?',
          choices: [
            'The schema may be elegant on paper but inefficient for real workloads',
            'The system will automatically become inconsistent',
            'The API layer stops working',
            'The database can no longer store strings',
          ],
          correctIndex: 0,
          explanation:
            'A schema that ignores actual access patterns may force expensive joins, wide scans, or inefficient key lookups for the product’s main flows. Systems design is not just about storing data correctly. It is about storing data so the important requests are practical and efficient.',
        },
        {
          id: 'sd-dm-9',
          prompt:
            'Which is the best example of an access-pattern-driven design decision?',
          choices: [
            'Adding a precomputed summary table for a frequently requested dashboard',
            'Sorting table names alphabetically',
            'Renaming all fields to shorter names for style',
            'Removing IDs because users never see them directly',
          ],
          correctIndex: 0,
          explanation:
            'If a dashboard is queried often and would otherwise require expensive aggregation on each request, a precomputed or materialized view can be a strong design choice. That is exactly what access-pattern-driven modeling looks like: shaping storage around important reads.',
        },
        {
          id: 'sd-dm-10',
          prompt:
            'A user profile service stores rarely changing profile info separately from a huge stream of user activity events. Why is that often a good modeling choice?',
          choices: [
            'The two data types have different access patterns and growth characteristics',
            'Because all systems should split every entity into multiple databases',
            'Because events cannot be indexed',
            'Because profile data should never have a primary key',
          ],
          correctIndex: 0,
          explanation:
            'Profile metadata and activity events usually behave very differently. Profile data is small and read frequently by key, while event data grows rapidly and may be queried by time range or analytics pipelines. Separating them often leads to a cleaner design aligned to their different workloads.',
        },
      ],
    },
    databases: {
      title: 'Databases',
      description:
        'Storage engine choices, indexing, and persistence tradeoffs',
      explanation:
        'Database selection in systems design is about matching storage technology to workload and requirements. There is no universal best database. Relational databases are often strong when you need transactions, structured relationships, and flexible querying. NoSQL databases can be strong when you need horizontal scale, high write throughput, flexible schemas, or key-based access at massive scale. Beyond the engine choice, strong candidates discuss indexing, replication, durability, consistency, and the operational consequences of each decision. In interviews, the goal is not to name every database product. It is to justify why a certain class of storage fits the system’s reads, writes, query patterns, and correctness needs.',
      vocab: [
        {
          term: 'relational database',
          definition:
            'A database organized around tables, structured schemas, and SQL queries.',
        },
        {
          term: 'NoSQL',
          definition:
            'A broad category of non-relational databases such as key-value, document, wide-column, and graph stores.',
        },
        {
          term: 'key-value store',
          definition:
            'A database optimized for simple lookups by key.',
        },
        {
          term: 'document database',
          definition:
            'A database that stores flexible semi-structured records, often as JSON-like documents.',
        },
        {
          term: 'wide-column store',
          definition:
            'A distributed database model designed for large-scale writes and partitioned access patterns.',
        },
        {
          term: 'graph database',
          definition:
            'A database specialized for traversing complex relationships between connected entities.',
        },
        {
          term: 'index',
          definition:
            'A data structure that speeds up queries by organizing values for efficient lookup.',
        },
        {
          term: 'primary index',
          definition:
            'The main index built on the primary key.',
        },
        {
          term: 'secondary index',
          definition:
            'An additional index supporting lookups on non-primary-key fields.',
        },
        {
          term: 'full table scan',
          definition:
            'Reading an entire table because no efficient index supports the query.',
        },
        {
          term: 'replication',
          definition:
            'Maintaining multiple copies of data for availability, durability, or read scaling.',
        },
        {
          term: 'sharding',
          definition:
            'Splitting data across multiple database nodes so storage and traffic can scale horizontally.',
        },
        {
          term: 'transaction',
          definition:
            'A sequence of operations executed atomically as a single unit.',
        },
        {
          term: 'ACID',
          definition:
            'A set of transactional guarantees: atomicity, consistency, isolation, and durability.',
        },
        {
          term: 'eventual consistency',
          definition:
            'A consistency model where replicas may temporarily diverge but converge later.',
        },
        {
          term: 'strong consistency',
          definition:
            'A model where reads reflect the latest committed write according to the system’s guarantees.',
        },
        {
          term: 'read replica',
          definition:
            'A replicated database instance used mainly to serve read traffic.',
        },
        {
          term: 'write throughput',
          definition:
            'The rate at which a database can safely handle insert or update operations.',
        },
        {
          term: 'latency',
          definition:
            'The time required to complete a database operation or query.',
        },
        {
          term: 'persistence',
          definition:
            'The durable storage of data so it survives process or machine failure.',
        },
      ],
      questions: [
        {
          id: 'sd-db-1',
          prompt:
            'What is the best high-level principle for choosing a database in a systems design interview?',
          choices: [
            'Match the database type to the system’s workload and requirements',
            'Always choose SQL because it is older',
            'Always choose NoSQL because it scales infinitely',
            'Choose the database with the most popular brand name',
          ],
          correctIndex: 0,
          explanation:
            'Database choice should follow from requirements such as consistency, query flexibility, write rate, scale, and data shape. Neither SQL nor NoSQL is universally correct. A good answer explains why a certain storage model fits the system being designed.',
        },
        {
          id: 'sd-db-2',
          prompt:
            'Which database type is often a strong fit for simple high-scale lookups by ID or key?',
          choices: [
            'Key-value store',
            'Graph database',
            'Spreadsheet engine',
            'Log viewer',
          ],
          correctIndex: 0,
          explanation:
            'Key-value stores excel when access is primarily by known key and the required operations are simple and fast. They are often used for caches, session stores, configuration, or straightforward lookup-heavy workloads.',
        },
        {
          id: 'sd-db-3',
          prompt:
            'Why are indexes important?',
          choices: [
            'They allow queries to avoid expensive full scans for supported lookups',
            'They remove the need for primary keys',
            'They guarantee perfect load balancing',
            'They compress all records automatically',
          ],
          correctIndex: 0,
          explanation:
            'Indexes speed up supported queries by organizing values for faster lookup. Without the right index, a database may need to scan large portions of a table, which becomes slow and expensive at scale. Indexes improve reads, though they usually add storage and write overhead.',
        },
        {
          id: 'sd-db-4',
          prompt:
            'What is a common downside of adding many indexes?',
          choices: [
            'Writes become more expensive because more index structures must be updated',
            'Reads become impossible',
            'Replication stops working',
            'Transactions are no longer supported anywhere',
          ],
          correctIndex: 0,
          explanation:
            'Indexes help reads, but every write may also need to update each relevant index. Too many indexes can increase write latency, storage usage, and operational complexity. Good database design balances read optimization against write cost.',
        },
        {
          id: 'sd-db-5',
          prompt:
            'When is a relational database especially attractive?',
          choices: [
            'When you need transactions, structured relationships, and flexible querying',
            'Only when the system has no scale requirements',
            'Only when all data is unstructured blobs',
            'When you want to avoid schemas entirely',
          ],
          correctIndex: 0,
          explanation:
            'Relational databases are often a strong choice when the system needs transactional correctness, well-defined relationships, and rich query capabilities. They are not limited to tiny systems; they can scale significantly, especially when paired with replication, partitioning, or complementary systems.',
        },
        {
          id: 'sd-db-6',
          prompt:
            'What is the main purpose of read replicas?',
          choices: [
            'To offload read traffic and improve availability',
            'To replace backups completely',
            'To eliminate all consistency tradeoffs',
            'To guarantee lower write latency',
          ],
          correctIndex: 0,
          explanation:
            'Read replicas allow some read traffic to be served from copies of the primary data, which can improve read scalability and resilience. However, they may introduce replication lag, so they do not automatically provide the same freshness as the primary.',
        },
        {
          id: 'sd-db-7',
          prompt:
            'Which requirement most strongly pushes you toward stronger transactional guarantees?',
          choices: [
            'Correct financial balance updates',
            'Approximate social media like counts',
            'Caching product thumbnails',
            'Serving static CSS files',
          ],
          correctIndex: 0,
          explanation:
            'Financial operations often require atomic updates, correctness, durability, and strong auditability. That usually makes transactional guarantees much more important than in use cases like like counts or cached media metadata, where some staleness or approximation may be acceptable.',
        },
        {
          id: 'sd-db-8',
          prompt:
            'What is sharding primarily used for?',
          choices: [
            'Scaling storage and traffic horizontally across multiple nodes',
            'Replacing the need for indexes',
            'Making every query strongly consistent globally',
            'Converting SQL into NoSQL automatically',
          ],
          correctIndex: 0,
          explanation:
            'Sharding distributes data across multiple machines so no single node must store or handle everything. It is a common scaling technique, but it introduces complexity around partitioning strategy, rebalancing, and cross-shard queries.',
        },
        {
          id: 'sd-db-9',
          prompt:
            'What is the biggest danger of choosing a database purely because it is fashionable?',
          choices: [
            'It may not fit the system’s actual query patterns or correctness needs',
            'It will always be slower than older databases',
            'It will never support replication',
            'It will automatically corrupt data',
          ],
          correctIndex: 0,
          explanation:
            'Database choice should be justified by workload, scale, data model, and requirements. Picking a trendy tool without grounding it in system needs often leads to unnecessary complexity or poor fit. Interviews reward reasoning, not brand-name collecting.',
        },
        {
          id: 'sd-db-10',
          prompt:
            'If a query frequently filters by email address and that field is not part of the primary key, what is often the most direct improvement?',
          choices: [
            'Add an appropriate secondary index on email',
            'Shard the database immediately',
            'Move everything into a graph database',
            'Delete the primary key',
          ],
          correctIndex: 0,
          explanation:
            'If email lookups are common and important, a secondary index on that field is often the simplest and most effective improvement. Sharding or changing database type would usually be much larger moves and not the first optimization to reach for.',
        },
      ],
    },
    caching: {
      title: 'Caching',
      description:
        'Read scaling, latency reduction, and cache invalidation tradeoffs',
      explanation:
        'Caching is one of the most common ways to improve system performance in a design interview. A cache stores recently or frequently accessed data closer to where it is needed so reads become faster and backend systems handle less load. Good candidates understand that caching is not free. It introduces staleness, invalidation complexity, memory limits, and operational tradeoffs. In interviews, strong caching discussions cover what data is worth caching, where the cache lives, whether the pattern is cache-aside or write-through, how long entries live, and how correctness is affected when cached data becomes stale. The goal is not to say “add Redis” automatically. The goal is to explain why caching helps this workload and how you manage the downsides.',
      vocab: [
        {
          term: 'cache',
          definition:
            'A fast storage layer used to serve data more quickly than the primary source of truth.',
        },
        {
          term: 'cache hit',
          definition:
            'A request served successfully from the cache without needing the backing store.',
        },
        {
          term: 'cache miss',
          definition:
            'A request where the needed data is not in cache, so the system must fetch it from the backing store.',
        },
        {
          term: 'hit rate',
          definition:
            'The percentage of requests served from cache.',
        },
        {
          term: 'TTL',
          definition:
            'Time to live, the period after which a cached entry expires automatically.',
        },
        {
          term: 'eviction',
          definition:
            'Removal of entries from cache, often because of expiration or memory pressure.',
        },
        {
          term: 'cache-aside',
          definition:
            'A pattern where the application reads from cache first and falls back to the database on a miss, then populates the cache.',
        },
        {
          term: 'write-through',
          definition:
            'A pattern where writes update the cache and backing store together.',
        },
        {
          term: 'write-back',
          definition:
            'A pattern where writes are first stored in cache and persisted to the backing store later.',
        },
        {
          term: 'invalidation',
          definition:
            'The process of removing or updating stale cached data after the source data changes.',
        },
        {
          term: 'stale data',
          definition:
            'Cached data that no longer reflects the latest value in the source of truth.',
        },
        {
          term: 'warming',
          definition:
            'Preloading cache entries before requests arrive so early traffic avoids misses.',
        },
        {
          term: 'cold start',
          definition:
            'A period when the cache is empty or underfilled, causing many initial misses.',
        },
        {
          term: 'hot key',
          definition:
            'A key that receives disproportionately high traffic and may overload a cache node or backend on misses.',
        },
        {
          term: 'cache stampede',
          definition:
            'A burst of requests that all miss or revalidate the same item at once, overwhelming the backend.',
        },
        {
          term: 'distributed cache',
          definition:
            'A cache spread across multiple nodes and shared by many application instances.',
        },
        {
          term: 'local cache',
          definition:
            'A cache stored in-process or on a single machine near one application instance.',
        },
        {
          term: 'read-through',
          definition:
            'A pattern where the cache itself fetches missing data from the backing store.',
        },
        {
          term: 'consistency window',
          definition:
            'The period during which cached data may be temporarily out of date.',
        },
        {
          term: 'source of truth',
          definition:
            'The authoritative system, usually the database or durable store, from which correctness is determined.',
        },
      ],
      questions: [
        {
          id: 'sd-cache-1',
          prompt:
            'What is the main reason to add a cache in a system design?',
          choices: [
            'To reduce read latency and offload backend systems',
            'To eliminate the need for databases entirely',
            'To guarantee strong consistency for all reads',
            'To make writes slower but more reliable',
          ],
          correctIndex: 0,
          explanation:
            'Caches are primarily used to make reads faster and reduce load on backing systems like databases or downstream services. They are especially useful for frequently requested or expensive-to-compute data. They do not replace the need for a durable source of truth in most systems.',
        },
        {
          id: 'sd-cache-2',
          prompt:
            'What happens in a cache-aside pattern on a cache miss?',
          choices: [
            'The application fetches from the database and then populates the cache',
            'The request fails immediately and is never retried',
            'The cache automatically shards the database',
            'The database writes into the cache before the application reads',
          ],
          correctIndex: 0,
          explanation:
            'In cache-aside, the application first checks the cache. If the value is missing, it fetches the data from the backing store and then stores it in the cache for future requests. This is one of the most common caching strategies because it is simple and flexible.',
        },
        {
          id: 'sd-cache-3',
          prompt:
            'What is the biggest classic difficulty with caching?',
          choices: [
            'Keeping cached data fresh through invalidation or expiration',
            'Creating primary keys',
            'Making the network physically faster',
            'Avoiding all memory usage',
          ],
          correctIndex: 0,
          explanation:
            'Caching often improves performance quickly, but maintaining correctness is harder. When the underlying data changes, the cached copy may become stale. That means the system needs an invalidation or expiration strategy, and the right strategy depends on the workload and correctness requirements.',
        },
        {
          id: 'sd-cache-4',
          prompt:
            'Why might a high cache hit rate matter?',
          choices: [
            'Because more requests are served quickly without reaching the backing store',
            'Because it guarantees zero stale reads',
            'Because it removes the need for indexes',
            'Because it makes replication unnecessary',
          ],
          correctIndex: 0,
          explanation:
            'A high hit rate means the cache is serving a large fraction of requests, which improves latency and reduces backend traffic. It does not guarantee correctness by itself, since cached data can still be stale depending on the invalidation model.',
        },
        {
          id: 'sd-cache-5',
          prompt:
            'When is caching usually most valuable?',
          choices: [
            'When reads are frequent and the same data is requested repeatedly',
            'When every request is a unique write-only operation',
            'When the data must never be stale even briefly',
            'When the system has no repeated access patterns',
          ],
          correctIndex: 0,
          explanation:
            'Caching provides the biggest benefit when many requests repeatedly access the same items or derived results. This allows the system to reuse previously fetched or computed data. Purely unique or highly volatile workloads often benefit less.',
        },
        {
          id: 'sd-cache-6',
          prompt:
            'What is a cache stampede?',
          choices: [
            'Many requests simultaneously miss or refresh the same key and overload the backend',
            'A cache that stores too many different key types',
            'A write path with too many indexes',
            'A network outage between two regions',
          ],
          correctIndex: 0,
          explanation:
            'A cache stampede happens when many requests for the same item arrive after expiration or invalidation, causing all of them to hit the database or origin at once. Systems often mitigate this with locking, request coalescing, early refresh, or jittered TTLs.',
        },
        {
          id: 'sd-cache-7',
          prompt:
            'What is the tradeoff of using a long TTL?',
          choices: [
            'Higher hit rates but potentially staler data',
            'Lower hit rates and fresher data',
            'No staleness risk at all',
            'Guaranteed faster writes',
          ],
          correctIndex: 0,
          explanation:
            'A longer TTL keeps entries around longer, which can improve hit rate and reduce backend load. The downside is that outdated values may remain visible for longer unless you also actively invalidate entries on writes.',
        },
        {
          id: 'sd-cache-8',
          prompt:
            'Why might a local in-process cache behave differently from a shared distributed cache?',
          choices: [
            'Local caches are faster per instance but can diverge across instances',
            'Local caches always have better global consistency',
            'Distributed caches cannot store keys',
            'Shared caches remove the need for invalidation',
          ],
          correctIndex: 0,
          explanation:
            'A local cache avoids network hops and can be very fast, but each application instance may hold a different cached value or lifecycle. A distributed cache centralizes shared state across instances, but adds network latency and distributed-system concerns.',
        },
        {
          id: 'sd-cache-9',
          prompt:
            'Which data is often a strong caching candidate?',
          choices: [
            'Frequently read product metadata that changes rarely',
            'A one-time password valid for only a few seconds with strict freshness needs',
            'A write-ahead log entry before durable persistence',
            'A highly unique request that will never be repeated',
          ],
          correctIndex: 0,
          explanation:
            'Data that is read often and updated infrequently is usually a strong fit for caching. Product metadata, user profile summaries, and popular feed items are common examples. Strictly fresh or highly unique data often provides less benefit or more correctness risk.',
        },
        {
          id: 'sd-cache-10',
          prompt:
            'What should remain the source of truth in most cached architectures?',
          choices: [
            'The backing database or durable primary store',
            'The fastest app server',
            'The load balancer',
            'The cache node with the most memory',
          ],
          correctIndex: 0,
          explanation:
            'In most systems, the cache is an optimization layer, not the authoritative store. The durable database or primary storage system remains the source of truth. This distinction matters because cache loss, eviction, or staleness should not destroy correctness.',
        },
      ],
    },
    messaging: {
      title: 'Messaging',
      description:
        'Queues, pub-sub, and asynchronous workflow design',
      explanation:
        'Messaging is a core systems design concept for decoupling services, smoothing load, and enabling asynchronous workflows. Instead of forcing every operation to happen immediately in a single request path, systems can place work onto a queue or publish events so downstream components process them later. Strong candidates understand the difference between point-to-point queues and pub-sub systems, when asynchronous processing improves resilience or responsiveness, and the tradeoffs around retries, duplicates, ordering, and failure handling. In interviews, messaging is valuable when one action triggers background work, fan-out, notifications, analytics, or integration with multiple downstream consumers.',
      vocab: [
        {
          term: 'message queue',
          definition:
            'A system where producers enqueue work items and consumers process them asynchronously.',
        },
        {
          term: 'producer',
          definition:
            'A service or component that sends messages into a queue or topic.',
        },
        {
          term: 'consumer',
          definition:
            'A service or worker that receives and processes messages.',
        },
        {
          term: 'pub-sub',
          definition:
            'A messaging pattern where publishers send events to a topic and multiple subscribers receive them.',
        },
        {
          term: 'topic',
          definition:
            'A named stream or channel in a pub-sub system to which events are published.',
        },
        {
          term: 'event',
          definition:
            'A record that something happened, often used to trigger downstream processing.',
        },
        {
          term: 'asynchronous processing',
          definition:
            'Handling work outside the immediate request-response path.',
        },
        {
          term: 'decoupling',
          definition:
            'Reducing direct dependencies so components can evolve or fail more independently.',
        },
        {
          term: 'retry',
          definition:
            'Reprocessing a failed message or operation in hopes of later success.',
        },
        {
          term: 'dead-letter queue',
          definition:
            'A holding area for messages that repeatedly fail processing.',
        },
        {
          term: 'at-least-once delivery',
          definition:
            'A delivery model where a message may be delivered more than once but should not be lost.',
        },
        {
          term: 'at-most-once delivery',
          definition:
            'A delivery model where a message is delivered zero or one time, risking loss but avoiding duplicates.',
        },
        {
          term: 'exactly-once semantics',
          definition:
            'A stronger processing goal where each message’s effect occurs once, typically requiring extra coordination.',
        },
        {
          term: 'idempotency',
          definition:
            'The property that processing the same message multiple times has the same effect as processing it once.',
        },
        {
          term: 'ordering',
          definition:
            'The sequence guarantee of messages, which may matter for correctness.',
        },
        {
          term: 'backpressure',
          definition:
            'A condition where consumers cannot keep up with incoming message volume.',
        },
        {
          term: 'fan-out',
          definition:
            'One message causing work or delivery to many downstream consumers.',
        },
        {
          term: 'acknowledgment',
          definition:
            'A confirmation that a message was processed successfully.',
        },
        {
          term: 'visibility timeout',
          definition:
            'A period during which a claimed message is hidden from other consumers before being retried if not acknowledged.',
        },
        {
          term: 'workflow orchestration',
          definition:
            'Coordinating multi-step asynchronous processes across services.',
        },
      ],
      questions: [
        {
          id: 'sd-msg-1',
          prompt:
            'Why do systems often introduce a message queue between services?',
          choices: [
            'To decouple producers and consumers and process work asynchronously',
            'To replace all databases',
            'To guarantee lower latency for every request path',
            'To avoid retries entirely',
          ],
          correctIndex: 0,
          explanation:
            'Queues let one service hand off work without forcing the downstream work to finish inside the same request. This improves decoupling, absorbs bursts, and enables background processing. It is especially useful when work can happen later without blocking the user.',
        },
        {
          id: 'sd-msg-2',
          prompt:
            'What is the main difference between a queue and pub-sub?',
          choices: [
            'A queue typically sends work to one consumer, while pub-sub broadcasts events to multiple subscribers',
            'A queue is synchronous, while pub-sub uses databases only',
            'Pub-sub cannot be used asynchronously',
            'Queues are only for frontend code',
          ],
          correctIndex: 0,
          explanation:
            'In a typical queue, each message is processed by one worker or consumer group member. In pub-sub, a published event can be consumed by multiple independent subscribers, each doing different downstream work such as analytics, notifications, or indexing.',
        },
        {
          id: 'sd-msg-3',
          prompt:
            'When is asynchronous processing especially useful?',
          choices: [
            'When the user does not need the downstream work completed immediately',
            'When every action must be fully finished before returning any response',
            'When the workload has no bursts or fan-out',
            'When all services must remain tightly coupled',
          ],
          correctIndex: 0,
          explanation:
            'Asynchronous processing is a strong fit for background emails, analytics pipelines, feed fan-out, search indexing, media processing, and similar tasks. It reduces user-facing latency by moving non-immediate work off the critical path.',
        },
        {
          id: 'sd-msg-4',
          prompt:
            'Why is idempotency important in messaging systems?',
          choices: [
            'Because retries or duplicate delivery can happen and processing should remain safe',
            'Because it makes encryption optional',
            'Because it removes the need for acknowledgments',
            'Because it guarantees perfect ordering',
          ],
          correctIndex: 0,
          explanation:
            'Many messaging systems provide at-least-once delivery, which means the same message may be delivered multiple times. Consumers should therefore be idempotent whenever possible so duplicate processing does not produce double-charges, repeated emails, or corrupted counters.',
        },
        {
          id: 'sd-msg-5',
          prompt:
            'What is a dead-letter queue used for?',
          choices: [
            'Holding messages that repeatedly fail processing',
            'Caching hot reads near the application',
            'Storing the primary relational schema',
            'Tracking only successful message acknowledgments',
          ],
          correctIndex: 0,
          explanation:
            'A dead-letter queue isolates poison messages or permanently failing work so the main queue can continue processing healthy traffic. It also allows operators to inspect, replay, or debug failed messages later.',
        },
        {
          id: 'sd-msg-6',
          prompt:
            'What does at-least-once delivery imply?',
          choices: [
            'A message may be delivered multiple times but should not be silently lost',
            'Each message is guaranteed to be processed exactly once with no duplicates',
            'Messages will always arrive in strict global order',
            'Consumers never need retry logic',
          ],
          correctIndex: 0,
          explanation:
            'At-least-once delivery favors durability over duplicate avoidance. If the system is uncertain whether processing succeeded, it may redeliver the message. That is why consumers often need idempotency keys or deduplication logic.',
        },
        {
          id: 'sd-msg-7',
          prompt:
            'Which problem does a queue help with during traffic spikes?',
          choices: [
            'It buffers work so producers can continue even if consumers process more slowly',
            'It makes all spikes disappear from the system entirely',
            'It removes the need for scaling consumers',
            'It guarantees zero latency for downstream processing',
          ],
          correctIndex: 0,
          explanation:
            'Queues smooth bursty traffic by letting producers enqueue work faster than consumers can process moment-to-moment. The backlog is then drained over time. This does not eliminate scale needs, but it helps the system absorb spikes more gracefully.',
        },
        {
          id: 'sd-msg-8',
          prompt:
            'What is the biggest concern if message ordering matters for correctness?',
          choices: [
            'The system must preserve or explicitly manage ordering guarantees',
            'The system should never use queues',
            'The database becomes optional',
            'Consumers should ignore retries',
          ],
          correctIndex: 0,
          explanation:
            'Some workflows depend on order, such as applying sequential account updates or processing state transitions. Not all messaging systems guarantee strict ordering, especially at scale, so the design must either preserve order within a partition or make the workflow safe even without strict order.',
        },
        {
          id: 'sd-msg-9',
          prompt:
            'Why might one published event be consumed by multiple different services?',
          choices: [
            'Because pub-sub supports fan-out to independent downstream use cases',
            'Because events can only ever have one interpretation',
            'Because queues require all consumers to share one codebase',
            'Because subscribers replace the need for storage',
          ],
          correctIndex: 0,
          explanation:
            'The same event can trigger different actions in different systems. For example, a new order event might update analytics, send an email, reserve inventory, and trigger fraud checks. Pub-sub lets each consumer react independently without tightly coupling them to the producer.',
        },
        {
          id: 'sd-msg-10',
          prompt:
            'What is backpressure in a messaging system?',
          choices: [
            'A situation where consumers cannot keep up with incoming message volume',
            'A cache invalidation failure',
            'A relational schema migration issue',
            'A frontend rendering slowdown caused by CSS',
          ],
          correctIndex: 0,
          explanation:
            'Backpressure means message production exceeds consumption capacity, causing lag or queue growth. This can require scaling consumers, rate limiting producers, prioritizing work, or redesigning the workflow so downstream systems can keep up.',
        },
      ],
    },
    consistency: {
      title: 'Consistency',
      description:
        'Consistency models, concurrency concerns, and distributed tradeoffs',
      explanation:
        'Consistency in systems design is about what different clients observe after data changes and how the system behaves when many operations happen concurrently across machines. Strong candidates understand that distributed systems force tradeoffs between consistency, availability, latency, and operational complexity. Some systems need strongly correct reads and writes, while others tolerate temporary staleness. Good interview answers also cover concurrency issues such as lost updates, duplicate actions, race conditions, and conflicting writes. The goal is not to say strong consistency is always best. The goal is to match the consistency model and concurrency controls to the business requirements of the system.',
      vocab: [
        {
          term: 'consistency',
          definition:
            'The degree to which reads reflect the latest writes across the system according to its guarantees.',
        },
        {
          term: 'strong consistency',
          definition:
            'A model where reads observe the latest committed write within the system’s guarantee boundaries.',
        },
        {
          term: 'eventual consistency',
          definition:
            'A model where replicas may temporarily diverge but converge over time.',
        },
        {
          term: 'read-after-write consistency',
          definition:
            'A guarantee that a client can read its own recent write immediately afterward.',
        },
        {
          term: 'replication lag',
          definition:
            'The delay before a write reaches replicas or derived systems.',
        },
        {
          term: 'stale read',
          definition:
            'A read that returns older data than the latest committed value.',
        },
        {
          term: 'race condition',
          definition:
            'A correctness problem caused by timing-dependent interactions between concurrent operations.',
        },
        {
          term: 'lost update',
          definition:
            'A situation where one write unintentionally overwrites another concurrent write.',
        },
        {
          term: 'concurrency control',
          definition:
            'Techniques used to coordinate concurrent operations safely.',
        },
        {
          term: 'optimistic locking',
          definition:
            'A concurrency strategy that detects conflicting updates, often using a version check.',
        },
        {
          term: 'pessimistic locking',
          definition:
            'A concurrency strategy that prevents conflicts by locking data before modification.',
        },
        {
          term: 'versioning',
          definition:
            'Tracking record versions so conflicting or stale updates can be detected.',
        },
        {
          term: 'quorum',
          definition:
            'A minimum number of replicas that must participate in a read or write operation.',
        },
        {
          term: 'split brain',
          definition:
            'A failure mode where different parts of a distributed system act as if they are independently authoritative.',
        },
        {
          term: 'idempotency',
          definition:
            'The property that repeating the same operation does not change the result beyond the first successful application.',
        },
        {
          term: 'conflict resolution',
          definition:
            'The method used to decide the correct state when concurrent or divergent updates occur.',
        },
        {
          term: 'transaction',
          definition:
            'A sequence of operations executed as a single atomic unit.',
        },
        {
          term: 'atomicity',
          definition:
            'The guarantee that a grouped operation either fully happens or does not happen at all.',
        },
        {
          term: 'linearizability',
          definition:
            'A strong consistency property where operations appear to occur in a single real-time order.',
        },
        {
          term: 'CAP tradeoff',
          definition:
            'The distributed systems tradeoff showing that during network partitions, systems must choose between stronger consistency and higher availability.',
        },
      ],
      questions: [
        {
          id: 'sd-cons-1',
          prompt:
            'What does eventual consistency mean?',
          choices: [
            'Different replicas may temporarily disagree but converge later',
            'Every read always returns the newest global value immediately',
            'The system never stores duplicates',
            'Transactions are disabled entirely',
          ],
          correctIndex: 0,
          explanation:
            'Eventual consistency allows temporary divergence between replicas or derived systems after writes. Over time, as updates propagate, the system converges. This model is common in distributed systems where lower latency and higher availability are prioritized over immediate global freshness.',
        },
        {
          id: 'sd-cons-2',
          prompt:
            'Which system most likely needs stronger consistency guarantees?',
          choices: [
            'A bank account balance and transfer ledger',
            'A social media like counter',
            'A trending hashtags dashboard',
            'A product recommendation cache',
          ],
          correctIndex: 0,
          explanation:
            'Financial systems usually require strict correctness because errors can cause direct business and legal harm. Temporary staleness or duplicate updates are often unacceptable. In contrast, systems like like counters or recommendation caches can often tolerate eventual consistency.',
        },
        {
          id: 'sd-cons-3',
          prompt:
            'What is a stale read?',
          choices: [
            'A read that returns older data than the latest committed value',
            'A read that takes too long because of compression',
            'A read from a table without a primary key',
            'A read that happens after a cache hit',
          ],
          correctIndex: 0,
          explanation:
            'A stale read occurs when a client sees outdated information, often due to replication lag, caching, or asynchronous propagation. This may be acceptable in some product experiences, but unacceptable in others depending on correctness requirements.',
        },
        {
          id: 'sd-cons-4',
          prompt:
            'What is a lost update problem?',
          choices: [
            'One concurrent write unintentionally overwrites another',
            'A cache entry expiring from memory',
            'A replica being added to a cluster',
            'A queue growing too quickly',
          ],
          correctIndex: 0,
          explanation:
            'Lost updates happen when two actors read the same old state, both modify it, and one write overwrites the other without detecting the conflict. This is a classic concurrency problem and often motivates transactions, version checks, or locking strategies.',
        },
        {
          id: 'sd-cons-5',
          prompt:
            'Why might optimistic locking be used?',
          choices: [
            'To detect conflicting updates without holding long-lived locks',
            'To guarantee that no conflicts can ever occur',
            'To make every read strongly consistent across regions',
            'To remove the need for version fields',
          ],
          correctIndex: 0,
          explanation:
            'Optimistic locking usually works by attaching a version number or timestamp to a record. A write succeeds only if the version matches what the client originally read. This allows high concurrency while still detecting conflicting changes.',
        },
        {
          id: 'sd-cons-6',
          prompt:
            'What does read-after-write consistency guarantee?',
          choices: [
            'A client can immediately read its own recent write',
            'All clients everywhere see all writes instantly',
            'The database never uses replication',
            'The system has zero latency',
          ],
          correctIndex: 0,
          explanation:
            'Read-after-write consistency is a narrower guarantee than full strong consistency. It ensures that once a client writes data, that same client can read the updated value right away. This often matters for user experience even in systems that are otherwise eventually consistent.',
        },
        {
          id: 'sd-cons-7',
          prompt:
            'What is the main tradeoff highlighted by the CAP theorem during a network partition?',
          choices: [
            'A distributed system must choose between stronger consistency and higher availability',
            'A system must choose between databases and caches',
            'A system must choose between SQL and indexes',
            'A system must choose between reads and writes forever',
          ],
          correctIndex: 0,
          explanation:
            'CAP is often oversimplified, but the key practical insight is that during a partition, a system cannot simultaneously provide both perfect availability and strong consistency across the partition. Designers must decide which side is more important for the business use case.',
        },
        {
          id: 'sd-cons-8',
          prompt:
            'Why is idempotency useful when handling retries in distributed systems?',
          choices: [
            'Because the same request may be repeated and should not apply its effect twice',
            'Because it guarantees strict ordering of all writes',
            'Because it removes replication lag',
            'Because it makes stale reads impossible',
          ],
          correctIndex: 0,
          explanation:
            'Distributed systems often retry requests after timeouts or ambiguous failures. Without idempotency, the same action might create duplicate charges, duplicate messages, or double inventory deductions. Idempotency keys and safe update logic help prevent that.',
        },
        {
          id: 'sd-cons-9',
          prompt:
            'When is eventual consistency often acceptable?',
          choices: [
            'When slight temporary staleness does not materially harm the product experience',
            'When every operation is a financial transfer',
            'When the system must reject all duplicate processing',
            'When the interviewer asks for exact serial execution',
          ],
          correctIndex: 0,
          explanation:
            'Many user-facing systems can tolerate brief staleness, especially for social feeds, analytics, recommendations, and counters. In these cases, eventual consistency can simplify scaling and improve latency. The key is that the business requirements must truly allow it.',
        },
        {
          id: 'sd-cons-10',
          prompt:
            'What is the first thing you should ask when deciding how strong consistency needs to be?',
          choices: [
            'What correctness errors are actually unacceptable for this business use case?',
            'Which database logo is most recognizable?',
            'How many programming languages are used by the team?',
            'Whether the frontend uses dark mode',
          ],
          correctIndex: 0,
          explanation:
            'Consistency requirements should be driven by business impact, not by abstract preference. If stale balances, duplicate purchases, or wrong inventory counts are unacceptable, the system likely needs stronger guarantees. If temporary lag is fine, a weaker but more scalable model may be a better fit.',
        },
      ],
    },
    scaling: {
      title: 'Scaling',
      description:
        'Horizontal growth, bottleneck analysis, and traffic distribution',
      explanation:
        'Scaling in systems design is about handling more users, more traffic, more data, and more work without the system collapsing or becoming too slow or expensive. Strong candidates do not treat scaling as a vague idea of “add more servers.” They identify actual bottlenecks first, then explain which parts of the system need to scale and why. In interviews, scaling discussions often include horizontal versus vertical scaling, stateless services, load balancing, partitioning, fan-out pressure, hotspot avoidance, and the difference between scaling reads, writes, storage, and asynchronous workloads. The best answers show that scaling is not one decision but a set of targeted responses to specific bottlenecks.',
      vocab: [
        {
          term: 'scaling',
          definition:
            'Increasing a system’s ability to handle more load, data, or users.',
        },
        {
          term: 'vertical scaling',
          definition:
            'Scaling by making a single machine larger or more powerful.',
        },
        {
          term: 'horizontal scaling',
          definition:
            'Scaling by adding more machines or instances to share the load.',
        },
        {
          term: 'load balancer',
          definition:
            'A component that distributes incoming traffic across multiple backend instances.',
        },
        {
          term: 'stateless service',
          definition:
            'A service that does not rely on per-instance local session state between requests.',
        },
        {
          term: 'stateful service',
          definition:
            'A service that keeps important in-memory or local state tied to a specific instance.',
        },
        {
          term: 'bottleneck',
          definition:
            'The system component that most limits performance or throughput.',
        },
        {
          term: 'throughput',
          definition:
            'The amount of work or number of requests a system can process over time.',
        },
        {
          term: 'latency',
          definition:
            'The time required to complete a request or operation.',
        },
        {
          term: 'hotspot',
          definition:
            'A skewed area of traffic or data concentration that overloads a small part of the system.',
        },
        {
          term: 'partitioning',
          definition:
            'Splitting data or traffic into smaller pieces so the load can be spread across multiple nodes.',
        },
        {
          term: 'sharding',
          definition:
            'A form of partitioning where data is distributed across multiple database nodes.',
        },
        {
          term: 'autoscaling',
          definition:
            'Automatically increasing or decreasing the number of running instances based on load.',
        },
        {
          term: 'fan-out',
          definition:
            'One action causing work for many downstream users, systems, or records.',
        },
        {
          term: 'backpressure',
          definition:
            'A condition where downstream systems cannot keep up with incoming work.',
        },
        {
          term: 'replication',
          definition:
            'Maintaining multiple copies of data or services for scale or resilience.',
        },
        {
          term: 'traffic distribution',
          definition:
            'How incoming requests are spread across servers, regions, or partitions.',
        },
        {
          term: 'resource saturation',
          definition:
            'A state where CPU, memory, disk, or network becomes fully utilized and limits performance.',
        },
        {
          term: 'elasticity',
          definition:
            'The ability of a system to expand or shrink capacity as demand changes.',
        },
        {
          term: 'capacity ceiling',
          definition:
            'The maximum load a component can handle before performance degrades or failures begin.',
        },
      ],
      questions: [
        {
          id: 'sd-scale-1',
          prompt:
            'What is the best first step when discussing scaling in a systems design interview?',
          choices: [
            'Identify the actual bottleneck and scale the part under pressure',
            'Immediately say microservices are required',
            'Add ten databases before estimating load',
            'Assume every component needs equal scaling',
          ],
          correctIndex: 0,
          explanation:
            'Strong scaling discussions begin with bottleneck analysis. The goal is to identify whether the pressure is on CPU, memory, network, reads, writes, storage, or downstream dependencies. Scaling should target the actual limit, not be a vague blanket statement about adding more machines.',
        },
        {
          id: 'sd-scale-2',
          prompt:
            'What is horizontal scaling?',
          choices: [
            'Adding more machines or instances to share the load',
            'Replacing one machine with a larger monitor',
            'Increasing only disk size on one node',
            'Compressing responses more aggressively',
          ],
          correctIndex: 0,
          explanation:
            'Horizontal scaling means spreading work across additional machines or instances. This is often preferred for internet-scale systems because it can increase capacity incrementally and avoid the hard limits of a single machine.',
        },
        {
          id: 'sd-scale-3',
          prompt:
            'Why are stateless application servers easier to scale horizontally?',
          choices: [
            'Because any instance can handle any request without needing sticky local state',
            'Because they do not need networking',
            'Because they remove the need for load balancers',
            'Because stateless systems never fail',
          ],
          correctIndex: 0,
          explanation:
            'Stateless services are easier to replicate because requests are not tied to one specific machine’s in-memory session or local disk state. This works well with load balancers and autoscaling, since traffic can be distributed more freely across instances.',
        },
        {
          id: 'sd-scale-4',
          prompt:
            'What is a common reason to add a load balancer?',
          choices: [
            'To distribute incoming requests across multiple backend instances',
            'To store durable backups of the database',
            'To replace message queues',
            'To eliminate all latency',
          ],
          correctIndex: 0,
          explanation:
            'A load balancer spreads traffic across backend instances so no single server handles all requests. This supports horizontal scaling, improves resilience, and can help route traffic away from unhealthy instances.',
        },
        {
          id: 'sd-scale-5',
          prompt:
            'What does a hotspot mean in a scaled system?',
          choices: [
            'A small subset of traffic or data becomes disproportionately overloaded',
            'A server room is physically too warm',
            'The cache has too much free memory',
            'The API returns too many status codes',
          ],
          correctIndex: 0,
          explanation:
            'A hotspot occurs when traffic or data distribution is uneven, causing a small number of partitions, machines, or keys to receive much more load than the rest. This can break a design that looks fine under average distribution assumptions.',
        },
        {
          id: 'sd-scale-6',
          prompt:
            'Why might read scaling and write scaling need different strategies?',
          choices: [
            'Because reads and writes stress systems differently and often have different bottlenecks',
            'Because writes never use the network',
            'Because reads cannot be cached',
            'Because write scaling only matters in small systems',
          ],
          correctIndex: 0,
          explanation:
            'Reads may be scaled with caching, replicas, CDNs, or denormalized views, while writes may need partitioning, batching, queues, or append-friendly storage. The right strategy depends on where the pressure is and what consistency guarantees are required.',
        },
        {
          id: 'sd-scale-7',
          prompt:
            'When does vertical scaling become limiting?',
          choices: [
            'When a single machine approaches practical CPU, memory, disk, or cost limits',
            'As soon as the first user arrives',
            'Only when using relational databases',
            'Never, because one machine can always be made larger indefinitely',
          ],
          correctIndex: 0,
          explanation:
            'Vertical scaling is often the simplest early step, but it eventually hits hardware and cost ceilings. At some point, a system must scale horizontally or redesign its workload distribution because one box cannot grow forever.',
        },
        {
          id: 'sd-scale-8',
          prompt:
            'What problem does partitioning or sharding primarily address?',
          choices: [
            'A single storage or processing node handling too much data or traffic',
            'Slow CSS rendering in the browser',
            'Too many comments in the codebase',
            'A missing product requirements document',
          ],
          correctIndex: 0,
          explanation:
            'Partitioning spreads data or traffic across multiple nodes so a single machine does not become a capacity or storage bottleneck. It is one of the key tools for scaling large datasets and high-throughput systems.',
        },
        {
          id: 'sd-scale-9',
          prompt:
            'Why is fan-out important when reasoning about scale?',
          choices: [
            'Because one user action can create far more downstream work than the original request suggests',
            'Because it only affects frontend rendering speed',
            'Because it makes load balancing unnecessary',
            'Because it always means the system should avoid asynchronous processing',
          ],
          correctIndex: 0,
          explanation:
            'Fan-out can multiply load significantly. A single post, notification, or event may trigger writes, queue messages, feed updates, and deliveries to many consumers. Estimating that amplification is often critical to choosing the right architecture.',
        },
        {
          id: 'sd-scale-10',
          prompt:
            'What does autoscaling help with?',
          choices: [
            'Adjusting instance count as traffic rises or falls',
            'Guaranteeing perfect database consistency',
            'Replacing observability and alerts',
            'Avoiding all capacity planning forever',
          ],
          correctIndex: 0,
          explanation:
            'Autoscaling helps a system adapt to changing demand by adding or removing compute instances automatically. It improves elasticity, but it still requires good metrics, safe scaling triggers, startup characteristics, and capacity planning for underlying stateful dependencies.',
        },
      ],
    },
    reliability: {
      title: 'Reliability',
      description:
        'Failure handling, redundancy, retries, and resilience',
      explanation:
        'Reliability is about keeping a system working correctly even when components fail, slow down, restart, or become unreachable. In systems design interviews, strong reliability answers assume failure will happen and explain how the design responds. This includes redundancy, retries, timeouts, circuit breakers, graceful degradation, dead-letter handling, replication, health checks, and avoiding single points of failure. The best candidates do not just say “make it highly available.” They identify where failures can occur and how the system limits blast radius, recovers, and preserves correctness under stress.',
      vocab: [
        {
          term: 'reliability',
          definition:
            'The ability of a system to continue operating correctly over time, including during failures.',
        },
        {
          term: 'redundancy',
          definition:
            'Having extra components or copies so the system can continue functioning if one fails.',
        },
        {
          term: 'failover',
          definition:
            'Switching traffic or responsibility from a failed component to a healthy one.',
        },
        {
          term: 'single point of failure',
          definition:
            'A component whose failure can bring down the entire system or critical path.',
        },
        {
          term: 'timeout',
          definition:
            'A limit on how long a component waits for another system before giving up.',
        },
        {
          term: 'retry',
          definition:
            'Trying a failed operation again, often after a delay.',
        },
        {
          term: 'exponential backoff',
          definition:
            'A retry strategy where wait time grows after repeated failures.',
        },
        {
          term: 'jitter',
          definition:
            'A random variation added to retries or schedules to avoid synchronized bursts.',
        },
        {
          term: 'circuit breaker',
          definition:
            'A protective mechanism that temporarily stops calls to a failing dependency.',
        },
        {
          term: 'graceful degradation',
          definition:
            'Continuing to provide partial service when some components fail.',
        },
        {
          term: 'health check',
          definition:
            'A test used to determine whether an instance or dependency is healthy enough to receive traffic.',
        },
        {
          term: 'heartbeat',
          definition:
            'A periodic signal showing that a node or service is still alive.',
        },
        {
          term: 'replication',
          definition:
            'Keeping multiple copies of data or service instances for resilience and scale.',
        },
        {
          term: 'durability',
          definition:
            'The likelihood that acknowledged data survives crashes or failures.',
        },
        {
          term: 'dead-letter queue',
          definition:
            'A place where repeatedly failing messages are isolated for later inspection.',
        },
        {
          term: 'blast radius',
          definition:
            'The scope of impact caused by a failure.',
        },
        {
          term: 'resilience',
          definition:
            'The ability of a system to absorb failures and recover while continuing useful operation.',
        },
        {
          term: 'availability',
          definition:
            'The proportion of time the system is accessible and functioning.',
        },
        {
          term: 'disaster recovery',
          definition:
            'Processes and architecture for restoring service after major outages or data loss events.',
        },
        {
          term: 'fault tolerance',
          definition:
            'The ability to keep operating despite component failures.',
        },
      ],
      questions: [
        {
          id: 'sd-rel-1',
          prompt:
            'What is the main mindset of strong reliability design?',
          choices: [
            'Assume components will fail and design the system to handle it',
            'Assume failures are rare enough to ignore',
            'Avoid redundancy because it adds complexity',
            'Rely on one perfect server to reduce coordination issues',
          ],
          correctIndex: 0,
          explanation:
            'Reliable systems are built on the assumption that machines, networks, dependencies, and processes will fail at some point. Good design focuses on detection, isolation, fallback behavior, and recovery rather than pretending failures will not occur.',
        },
        {
          id: 'sd-rel-2',
          prompt:
            'What is a single point of failure?',
          choices: [
            'A component whose failure can break the whole system or critical path',
            'A component with low CPU usage',
            'A secondary cache key',
            'Any service that has logs enabled',
          ],
          correctIndex: 0,
          explanation:
            'A single point of failure is dangerous because there is no backup path if it goes down. Good reliability design tries to remove or mitigate these by using redundancy, replication, or fallback mechanisms.',
        },
        {
          id: 'sd-rel-3',
          prompt:
            'Why are timeouts important when calling downstream services?',
          choices: [
            'They prevent a caller from hanging indefinitely on a slow or dead dependency',
            'They guarantee the dependency will recover',
            'They make all responses strongly consistent',
            'They eliminate the need for retries',
          ],
          correctIndex: 0,
          explanation:
            'Without timeouts, one slow dependency can cause request threads, workers, or connections to pile up and spread failure through the system. Timeouts are a core reliability tool because they limit how long one component waits for another.',
        },
        {
          id: 'sd-rel-4',
          prompt:
            'Why is retrying a failed request sometimes useful?',
          choices: [
            'Because some failures are transient and succeed on a later attempt',
            'Because retries always reduce total load',
            'Because retries eliminate duplicate processing risk',
            'Because every failure is caused by bad input',
          ],
          correctIndex: 0,
          explanation:
            'Transient failures such as temporary network glitches, brief overloads, or leader changes may succeed if retried. However, retries must be controlled carefully with timeouts, backoff, and idempotency, or they can make outages worse.',
        },
        {
          id: 'sd-rel-5',
          prompt:
            'What is the purpose of exponential backoff with jitter?',
          choices: [
            'To spread retry attempts over time and avoid synchronized retry storms',
            'To make retries happen as fast as possible',
            'To guarantee no duplicate requests occur',
            'To replace all monitoring alerts',
          ],
          correctIndex: 0,
          explanation:
            'When many clients retry at once, they can overload a struggling dependency even more. Exponential backoff slows repeated attempts, and jitter randomizes timing so clients do not all retry in lockstep.',
        },
        {
          id: 'sd-rel-6',
          prompt:
            'What does graceful degradation mean?',
          choices: [
            'The system continues delivering reduced but useful functionality during failures',
            'The system shuts down fully to protect brand reputation',
            'The system always serves stale data forever',
            'The system ignores failed dependencies completely',
          ],
          correctIndex: 0,
          explanation:
            'Graceful degradation means the system still provides some value when a dependency or feature is unavailable. For example, a site may still show cached content even if recommendations or analytics are temporarily offline.',
        },
        {
          id: 'sd-rel-7',
          prompt:
            'What is the purpose of a circuit breaker?',
          choices: [
            'To stop repeatedly calling a failing dependency until it recovers',
            'To physically cut power to overloaded servers',
            'To increase cache TTL automatically',
            'To compress database rows',
          ],
          correctIndex: 0,
          explanation:
            'A circuit breaker protects both the caller and the failing dependency. Instead of sending endless doomed requests, it quickly fails or falls back for a period of time, allowing the dependency to recover and reducing system-wide overload.',
        },
        {
          id: 'sd-rel-8',
          prompt:
            'Why are health checks useful with load balancers or orchestrators?',
          choices: [
            'They help route traffic only to healthy instances',
            'They guarantee no bugs exist in the service',
            'They remove the need for replication',
            'They make retries unnecessary',
          ],
          correctIndex: 0,
          explanation:
            'Health checks let traffic managers avoid sending requests to instances that are crashed, wedged, or unhealthy. This improves availability and supports automatic replacement or failover when instances stop functioning correctly.',
        },
        {
          id: 'sd-rel-9',
          prompt:
            'What does reducing blast radius mean?',
          choices: [
            'Limiting how much of the system is affected by one failure',
            'Making every outage global so it is easier to diagnose',
            'Ensuring all services share the same database',
            'Turning off retries in every component',
          ],
          correctIndex: 0,
          explanation:
            'Reducing blast radius means containing failures so one bad service, region, node, or deployment does not bring down everything else. Isolation boundaries, rate limits, queue separation, and cell-based design are all examples of this thinking.',
        },
        {
          id: 'sd-rel-10',
          prompt:
            'What is the role of redundancy in reliability?',
          choices: [
            'It provides alternate components or copies so service can continue after failures',
            'It guarantees zero operational complexity',
            'It only matters for frontend assets',
            'It removes the need for backups and recovery planning',
          ],
          correctIndex: 0,
          explanation:
            'Redundancy is one of the core tools of reliability. Multiple service instances, replicated databases, extra network paths, and backup capacity all help the system survive failures instead of depending on one fragile component.',
        },
      ],
    },
    rateLimiting: {
      title: 'Rate Limiting',
      description:
        'Protecting systems from abuse and unbounded load',
      explanation:
        'Rate limiting protects systems from overload, abuse, and unfair resource consumption by restricting how much traffic a client, user, or service can generate over time. In systems design interviews, rate limiting is important both for security and for stability. It can protect APIs from bots, protect expensive operations from being spammed, and stop one noisy tenant from degrading service for everyone else. Strong candidates understand common approaches such as token bucket, leaky bucket, and fixed or sliding windows, along with practical questions like what key to limit on, what happens when limits are exceeded, and whether limits should be local or globally coordinated.',
      vocab: [
        {
          term: 'rate limiting',
          definition:
            'Restricting how many requests or actions are allowed in a given time period.',
        },
        {
          term: 'throttling',
          definition:
            'Deliberately slowing or rejecting requests when a limit is reached.',
        },
        {
          term: 'quota',
          definition:
            'A defined allowance of requests, bytes, or operations over time.',
        },
        {
          term: 'burst',
          definition:
            'A short spike of traffic above the average rate.',
        },
        {
          term: 'token bucket',
          definition:
            'A rate-limiting algorithm where requests consume tokens that refill over time, allowing controlled bursts.',
        },
        {
          term: 'leaky bucket',
          definition:
            'A rate-limiting or smoothing model where traffic exits at a controlled steady rate.',
        },
        {
          term: 'fixed window',
          definition:
            'A scheme where requests are counted in discrete time intervals such as each minute.',
        },
        {
          term: 'sliding window',
          definition:
            'A rate-limiting approach that measures requests over a moving time range for smoother enforcement.',
        },
        {
          term: 'limit key',
          definition:
            'The identity used to apply limits, such as user ID, API key, IP address, or tenant ID.',
        },
        {
          term: '429 response',
          definition:
            'The HTTP status code commonly returned when a client exceeds a request limit.',
        },
        {
          term: 'fairness',
          definition:
            'Ensuring one user or client cannot consume a disproportionate share of resources.',
        },
        {
          term: 'abuse prevention',
          definition:
            'Using limits and controls to reduce spam, scraping, credential attacks, or excessive automated traffic.',
        },
        {
          term: 'backoff',
          definition:
            'A client behavior of waiting before retrying after being limited or failing.',
        },
        {
          term: 'global limit',
          definition:
            'A limit enforced consistently across all instances or regions for the same identity.',
        },
        {
          term: 'local limit',
          definition:
            'A limit enforced independently by one instance, which may be simpler but less globally accurate.',
        },
        {
          term: 'noisy neighbor',
          definition:
            'A tenant or client whose excessive traffic harms others sharing the same system.',
        },
        {
          term: 'admission control',
          definition:
            'A mechanism that decides whether new work should be accepted into the system.',
        },
        {
          term: 'request budget',
          definition:
            'The allowed amount of traffic a client can send within a time period.',
        },
        {
          term: 'distributed counter',
          definition:
            'A counter maintained across multiple nodes for coordinated limit enforcement.',
        },
        {
          term: 'traffic shaping',
          definition:
            'Controlling the flow characteristics of traffic rather than simply accepting or rejecting it.',
        },
      ],
      questions: [
        {
          id: 'sd-rl-1',
          prompt:
            'What is the main goal of rate limiting?',
          choices: [
            'To protect systems from abuse and unbounded load',
            'To make every request slower',
            'To replace authentication completely',
            'To guarantee database consistency',
          ],
          correctIndex: 0,
          explanation:
            'Rate limiting is mainly a protection and fairness mechanism. It prevents clients from overwhelming the system, whether accidentally or maliciously, and helps preserve service quality for everyone else.',
        },
        {
          id: 'sd-rl-2',
          prompt:
            'Which HTTP status code is commonly returned when a client exceeds a rate limit?',
          choices: ['429', '201', '302', '503'],
          correctIndex: 0,
          explanation:
            'HTTP 429 Too Many Requests is the standard response when a client exceeds an allowed request rate. Systems often pair it with retry guidance or headers explaining the remaining quota and reset timing.',
        },
        {
          id: 'sd-rl-3',
          prompt:
            'Why might an API choose to rate limit by API key or user ID instead of just IP address?',
          choices: [
            'Because identity-based limits are often fairer and less affected by shared networks',
            'Because IP addresses cannot be logged',
            'Because user IDs automatically prevent all bots',
            'Because per-user limits remove the need for authentication',
          ],
          correctIndex: 0,
          explanation:
            'IP-based limits can be useful, but they may unfairly group many users behind one NAT or fail to distinguish multiple abusive clients. Limiting by authenticated identity often provides better fairness and more accurate tenant-level control.',
        },
        {
          id: 'sd-rl-4',
          prompt:
            'What is the main advantage of a token bucket algorithm?',
          choices: [
            'It allows controlled bursts while enforcing an average rate over time',
            'It guarantees globally exact limits without coordination',
            'It eliminates the need for counters',
            'It only works for write operations',
          ],
          correctIndex: 0,
          explanation:
            'Token bucket is popular because it supports short bursts when tokens have accumulated, while still limiting sustained traffic over time. This matches real-world workloads better than some rigid fixed-window strategies.',
        },
        {
          id: 'sd-rl-5',
          prompt:
            'What is a noisy neighbor problem?',
          choices: [
            'One client or tenant consumes so many shared resources that others are affected',
            'A server with loud cooling fans',
            'A cache key with too many characters',
            'A database shard with too much compression',
          ],
          correctIndex: 0,
          explanation:
            'In shared systems, one user or tenant may generate excessive load and harm performance for everyone else. Rate limiting helps control this and preserve fairness across customers.',
        },
        {
          id: 'sd-rl-6',
          prompt:
            'Why might a sliding-window limiter be preferred over a fixed-window limiter?',
          choices: [
            'It avoids sharp boundary effects where clients burst at window edges',
            'It removes all storage cost',
            'It guarantees exact fairness in every distributed deployment',
            'It is only needed for frontend requests',
          ],
          correctIndex: 0,
          explanation:
            'Fixed windows can allow edge-case bursts, such as many requests at the end of one minute and many more at the start of the next. Sliding windows smooth this behavior by evaluating a moving time range.',
        },
        {
          id: 'sd-rl-7',
          prompt:
            'What is a key design question when implementing rate limiting?',
          choices: [
            'What identity or resource the limit should be applied to',
            'What font the dashboard should use',
            'Whether the database should have comments enabled',
            'Whether caches use camelCase keys',
          ],
          correctIndex: 0,
          explanation:
            'A central design choice is the limit key: user ID, API key, IP, tenant, endpoint, or some combination. The right choice depends on fairness, abuse model, and the shape of the workload you want to control.',
        },
        {
          id: 'sd-rl-8',
          prompt:
            'Why can globally coordinated rate limits be harder than local per-instance limits?',
          choices: [
            'Because multiple instances must share accurate state or counters',
            'Because local limits require no algorithms',
            'Because global limits only work in single-threaded systems',
            'Because distributed systems cannot count requests',
          ],
          correctIndex: 0,
          explanation:
            'A local limiter is simpler because each instance can track its own requests. A truly global limit needs some shared or coordinated state so that requests spread across many instances still count toward the same budget.',
        },
        {
          id: 'sd-rl-9',
          prompt:
            'What should a well-behaved client often do after being rate limited?',
          choices: [
            'Back off and retry later according to the service guidance',
            'Retry immediately in a tight loop',
            'Open more parallel connections until one succeeds',
            'Assume the service is permanently broken',
          ],
          correctIndex: 0,
          explanation:
            'Clients should respect limits by backing off rather than hammering the service. Immediate repeated retries usually worsen overload and can keep the client locked out longer. Good APIs often provide enough information for clients to retry responsibly.',
        },
        {
          id: 'sd-rl-10',
          prompt:
            'Why is rate limiting useful even for authenticated internal services?',
          choices: [
            'Because bugs or runaway jobs can overload systems even without malicious intent',
            'Because internal services never need fairness',
            'Because authentication already prevents accidental overload',
            'Because internal traffic cannot spike',
          ],
          correctIndex: 0,
          explanation:
            'Not all overload comes from attackers. Internal batch jobs, bad deployments, retry storms, or misconfigured clients can create damaging traffic too. Rate limiting and admission control help contain these situations and protect shared dependencies.',
        },
      ],
    },
    idempotency: {
      title: 'Idempotency',
      description:
        'Safe retries and duplicate-request protection',
      explanation:
        'Idempotency is the property that repeating the same operation does not change the final result beyond the first successful application. In systems design, this matters because distributed systems retry all the time: clients retry after timeouts, queues may redeliver messages, users may double-click buttons, and load balancers may replay requests after connection failures. Strong candidates know that retries are necessary for reliability, but retries can be dangerous unless the system can detect duplicates or safely apply the same request more than once. In interviews, idempotency often comes up in payments, order creation, job processing, and event handling. The key idea is to make “try again” safe, even when the caller is not sure whether the first attempt succeeded.',
      vocab: [
        {
          term: 'idempotency',
          definition:
            'The property that applying the same operation multiple times has the same effect as applying it once.',
        },
        {
          term: 'retry',
          definition:
            'Repeating a request or message processing attempt after failure or uncertainty.',
        },
        {
          term: 'duplicate request',
          definition:
            'A repeated request representing the same intended action, whether caused by user behavior or system retries.',
        },
        {
          term: 'idempotency key',
          definition:
            'A client-supplied or system-generated identifier used to detect repeated submissions of the same logical operation.',
        },
        {
          term: 'deduplication',
          definition:
            'The process of detecting and suppressing repeated processing of the same logical request or event.',
        },
        {
          term: 'exactly-once effect',
          definition:
            'The practical outcome where an operation’s result is applied once, even if requests are retried underneath.',
        },
        {
          term: 'at-least-once delivery',
          definition:
            'A messaging model where a message may be delivered more than once, making idempotent consumers important.',
        },
        {
          term: 'request fingerprint',
          definition:
            'A derived identity for a request based on its contents or metadata, used for duplicate detection.',
        },
        {
          term: 'replay',
          definition:
            'Resending or reprocessing the same request or event, intentionally or accidentally.',
        },
        {
          term: 'side effect',
          definition:
            'A persistent external change caused by an operation, such as charging a card or sending an email.',
        },
        {
          term: 'write once',
          definition:
            'A behavior where only the first valid processing of a request creates the intended state change.',
        },
        {
          term: 'upsert',
          definition:
            'An operation that inserts a record if missing or updates it if present, often useful for idempotent behavior.',
        },
        {
          term: 'unique constraint',
          definition:
            'A database rule that prevents duplicate values for a field or field combination.',
        },
        {
          term: 'conditional write',
          definition:
            'A write that succeeds only if a required condition holds, often used to prevent duplicate effects.',
        },
        {
          term: 'race condition',
          definition:
            'A correctness issue caused by timing-dependent concurrent operations.',
        },
        {
          term: 'dedupe window',
          definition:
            'The time period during which repeated requests with the same identity are treated as duplicates.',
        },
        {
          term: 'outbox pattern',
          definition:
            'A pattern for safely recording events alongside database updates so retries do not lose or duplicate side effects unpredictably.',
        },
        {
          term: 'consumer idempotency',
          definition:
            'The property that a message consumer can safely process the same event multiple times.',
        },
        {
          term: 'request timeout ambiguity',
          definition:
            'A situation where the caller does not know whether the operation succeeded before the timeout occurred.',
        },
        {
          term: 'operation identity',
          definition:
            'The stable logical identity of a business action, used to decide whether two attempts are really the same request.',
        },
      ],
      questions: [
        {
          id: 'sd-idem-1',
          prompt:
            'What does it mean for an operation to be idempotent?',
          choices: [
            'Repeating it produces the same final effect as doing it once',
            'It always finishes instantly',
            'It can only be executed by one server',
            'It never writes to storage',
          ],
          correctIndex: 0,
          explanation:
            'Idempotency means a caller can safely retry the same logical operation without causing extra side effects. This is critical in distributed systems because callers often do not know whether a timed-out request already succeeded.',
        },
        {
          id: 'sd-idem-2',
          prompt:
            'Why is idempotency especially important for payment or order creation APIs?',
          choices: [
            'Because retries must not create duplicate charges or duplicate orders',
            'Because payments never use databases',
            'Because idempotency makes authentication unnecessary',
            'Because order APIs should reject all retries automatically',
          ],
          correctIndex: 0,
          explanation:
            'In payment or order flows, duplicate side effects are costly and user-visible. If the client times out and retries, the system must ensure the same logical payment or order is not created twice.',
        },
        {
          id: 'sd-idem-3',
          prompt:
            'What is the common purpose of an idempotency key?',
          choices: [
            'To identify repeated attempts of the same logical request',
            'To encrypt the payload body',
            'To replace primary keys in every table',
            'To guarantee global ordering of all requests',
          ],
          correctIndex: 0,
          explanation:
            'An idempotency key lets the server recognize that multiple submissions represent the same intended action. The system can then return the original result or suppress duplicate side effects instead of executing the action again.',
        },
        {
          id: 'sd-idem-4',
          prompt:
            'Which situation most strongly motivates idempotent API design?',
          choices: [
            'A client times out and retries without knowing whether the first attempt succeeded',
            'A CSS file loads slowly in the browser',
            'A log file rotates overnight',
            'A user changes a dark mode preference',
          ],
          correctIndex: 0,
          explanation:
            'Timeout ambiguity is one of the classic idempotency problems. The first attempt may have succeeded on the server even though the client never saw the response, so retrying must be safe.',
        },
        {
          id: 'sd-idem-5',
          prompt:
            'Which database mechanism is often useful for enforcing idempotent effects?',
          choices: [
            'A unique constraint or conditional write',
            'A full table scan',
            'A read replica only',
            'A CDN edge cache',
          ],
          correctIndex: 0,
          explanation:
            'Unique constraints and conditional writes help ensure only one record or state transition can be created for a given logical operation identity. They are a common building block for idempotent systems.',
        },
        {
          id: 'sd-idem-6',
          prompt:
            'Why do message consumers often need to be idempotent?',
          choices: [
            'Because at-least-once delivery may send the same message more than once',
            'Because queues guarantee perfect exactly-once delivery everywhere',
            'Because consumers should never acknowledge messages',
            'Because idempotency removes the need for persistence',
          ],
          correctIndex: 0,
          explanation:
            'Many queueing systems favor durability and retries, which means duplicate delivery is possible. Consumers should therefore process repeated messages safely or detect and suppress duplicates.',
        },
        {
          id: 'sd-idem-7',
          prompt:
            'Which operation is naturally closer to idempotent?',
          choices: [
            'Setting a profile nickname to "Steve"',
            'Incrementing a counter by 1 each time the request arrives',
            'Charging a credit card on every retry',
            'Sending a new email for every duplicate message',
          ],
          correctIndex: 0,
          explanation:
            'Setting a field to a specific value is naturally more idempotent because repeating it leaves the same final state. Increment-style operations are not idempotent unless extra duplicate protection is added.',
        },
        {
          id: 'sd-idem-8',
          prompt:
            'What is the main risk if an operation is retried without idempotency protection?',
          choices: [
            'The same business action may be applied multiple times',
            'The request becomes impossible to log',
            'The API can no longer use JSON',
            'The database loses all indexes',
          ],
          correctIndex: 0,
          explanation:
            'Without idempotency, retries can produce duplicate orders, duplicate payments, repeated notifications, or repeated inventory deductions. This is a core correctness risk in distributed systems.',
        },
        {
          id: 'sd-idem-9',
          prompt:
            'What is the best high-level goal of idempotency design?',
          choices: [
            'Make retries safe even when the caller is uncertain about prior success',
            'Prevent all failures from happening',
            'Guarantee global total ordering of all writes',
            'Eliminate the need for monitoring',
          ],
          correctIndex: 0,
          explanation:
            'Idempotency does not remove failures. It makes the system safer under failures by allowing repeated attempts without repeating the business effect.',
        },
        {
          id: 'sd-idem-10',
          prompt:
            'Why is a dedupe window sometimes needed with idempotency keys?',
          choices: [
            'Because the system usually only needs to remember duplicate identities for some bounded time',
            'Because idempotency keys must expire before the original request finishes',
            'Because dedupe windows make retries happen faster',
            'Because databases cannot store stable request identifiers',
          ],
          correctIndex: 0,
          explanation:
            'Systems often keep idempotency records for a practical time window rather than forever. That window should be long enough to catch realistic retries and replays for the operation being protected.',
        },
      ],
    },
    observability: {
      title: 'Observability',
      description:
        'Metrics, logs, traces, and operational visibility',
      explanation:
        'Observability is the ability to understand what a system is doing internally by examining its outputs, especially metrics, logs, and traces. In systems design interviews, observability matters because building a system is not enough. You also need to operate it, debug it, and know when it is failing or degrading. Strong candidates explain how they would monitor latency, errors, throughput, resource saturation, queue lag, cache hit rate, and business-critical events. They also understand the different roles of logs, metrics, and distributed tracing. Good observability reduces detection time, speeds incident response, and helps teams debug complex distributed systems where failures are not obvious from a single machine.',
      vocab: [
        {
          term: 'observability',
          definition:
            'The ability to understand a system’s internal state and behavior from its external signals.',
        },
        {
          term: 'metrics',
          definition:
            'Numeric measurements collected over time, such as latency, error rate, or CPU usage.',
        },
        {
          term: 'logs',
          definition:
            'Structured or unstructured event records emitted by applications and infrastructure.',
        },
        {
          term: 'trace',
          definition:
            'A record of how a single request or workflow travels through multiple services.',
        },
        {
          term: 'distributed tracing',
          definition:
            'Tracking a request across many services to understand call paths and timing.',
        },
        {
          term: 'latency',
          definition:
            'The time required to complete an operation or request.',
        },
        {
          term: 'throughput',
          definition:
            'The amount of work or number of requests processed over time.',
        },
        {
          term: 'error rate',
          definition:
            'The proportion of requests or operations that fail.',
        },
        {
          term: 'saturation',
          definition:
            'The extent to which a resource such as CPU, memory, disk, or queue capacity is near its limit.',
        },
        {
          term: 'SLI',
          definition:
            'Service Level Indicator, a measured signal such as latency or availability used to evaluate system health.',
        },
        {
          term: 'SLO',
          definition:
            'Service Level Objective, a target value for an indicator such as uptime or P95 latency.',
        },
        {
          term: 'alert',
          definition:
            'A notification triggered when a metric or condition suggests a problem requiring attention.',
        },
        {
          term: 'dashboard',
          definition:
            'A visual summary of key metrics and system health indicators.',
        },
        {
          term: 'correlation ID',
          definition:
            'An identifier attached across services and logs so related activity can be tied to one request or workflow.',
        },
        {
          term: 'cardinality',
          definition:
            'The number of distinct label or field values in telemetry data, important for observability cost and usability.',
        },
        {
          term: 'sampling',
          definition:
            'Collecting only a subset of telemetry, often used for traces or high-volume logs.',
        },
        {
          term: 'queue lag',
          definition:
            'The delay or backlog showing how far behind message consumers are.',
        },
        {
          term: 'RED metrics',
          definition:
            'A common monitoring set focused on rate, errors, and duration.',
        },
        {
          term: 'golden signals',
          definition:
            'Common high-level health signals such as latency, traffic, errors, and saturation.',
        },
        {
          term: 'root cause analysis',
          definition:
            'The process of identifying the underlying reason an incident occurred.',
        },
      ],
      questions: [
        {
          id: 'sd-obs-1',
          prompt:
            'What is the main purpose of observability in a distributed system?',
          choices: [
            'To understand system behavior, detect problems, and debug incidents',
            'To remove the need for testing',
            'To guarantee no outages occur',
            'To replace architecture reviews',
          ],
          correctIndex: 0,
          explanation:
            'Observability helps teams see what is happening in the system and why. In distributed systems, failures are often spread across many services, so strong telemetry is essential for diagnosis and operations.',
        },
        {
          id: 'sd-obs-2',
          prompt:
            'Which signal type is best for tracking a request across multiple services?',
          choices: [
            'Distributed tracing',
            'A CSS stylesheet',
            'A database schema migration',
            'A fixed window rate limiter',
          ],
          correctIndex: 0,
          explanation:
            'Distributed tracing shows the path and timing of a single request through multiple services. It is especially useful for identifying which hop is slow or failing in a microservice architecture.',
        },
        {
          id: 'sd-obs-3',
          prompt:
            'Which of the following is a metric rather than a log or trace?',
          choices: [
            'P95 latency over time',
            'A stack trace for one exception',
            'A JSON log entry for one request',
            'A span showing one RPC call',
          ],
          correctIndex: 0,
          explanation:
            'Metrics are aggregated numeric measurements over time. P95 latency is a classic example because it summarizes request timing behavior across many requests rather than representing one event.',
        },
        {
          id: 'sd-obs-4',
          prompt:
            'Why are logs still useful even if you already have metrics?',
          choices: [
            'Because logs provide detailed event-level context that metrics often do not',
            'Because metrics cannot measure latency',
            'Because logs automatically replace alerts',
            'Because logs guarantee strong consistency',
          ],
          correctIndex: 0,
          explanation:
            'Metrics tell you that something is wrong, while logs often help explain what happened in specific cases. They are complementary: metrics are great for detection and trends, logs are great for detail and forensic debugging.',
        },
        {
          id: 'sd-obs-5',
          prompt:
            'What does an error-rate metric help you detect?',
          choices: [
            'Whether a larger-than-normal fraction of operations are failing',
            'Whether database rows are sorted alphabetically',
            'Whether all users prefer dark mode',
            'Whether CPU frequency is physically damaged',
          ],
          correctIndex: 0,
          explanation:
            'Error rate is one of the most important health signals because it shows when requests or operations are failing more often than expected. It is commonly paired with traffic and latency in dashboards and alerts.',
        },
        {
          id: 'sd-obs-6',
          prompt:
            'Why are correlation IDs valuable?',
          choices: [
            'They let you tie together related logs and actions across services for one request',
            'They compress the payload automatically',
            'They enforce database uniqueness constraints',
            'They replace authentication tokens',
          ],
          correctIndex: 0,
          explanation:
            'A correlation ID gives one request or workflow a shared identity across logs, traces, and services. This makes debugging multi-hop failures much easier because related records can be stitched together.',
        },
        {
          id: 'sd-obs-7',
          prompt:
            'What does resource saturation usually tell you?',
          choices: [
            'A component is approaching a capacity limit and may become a bottleneck',
            'The cache hit rate is improving',
            'The API is becoming more secure',
            'The system has no need for scaling',
          ],
          correctIndex: 0,
          explanation:
            'Saturation reflects how close a resource is to its limit. High CPU, memory pressure, disk IOPS exhaustion, or queue growth often signal that performance or reliability problems may follow if the pressure continues.',
        },
        {
          id: 'sd-obs-8',
          prompt:
            'Why are alerts important?',
          choices: [
            'They notify operators when key signals suggest a problem needs attention',
            'They replace dashboards permanently',
            'They remove the need for runbooks',
            'They are only useful during office hours',
          ],
          correctIndex: 0,
          explanation:
            'Alerts help teams detect issues quickly instead of waiting for users to complain. The best alerts are tied to meaningful symptoms or SLO-impacting conditions, not just noisy low-level fluctuations.',
        },
        {
          id: 'sd-obs-9',
          prompt:
            'What is queue lag a useful indicator of?',
          choices: [
            'Consumers falling behind producers in an asynchronous system',
            'A frontend color theme mismatch',
            'A relational schema naming problem',
            'A successful cache warm-up',
          ],
          correctIndex: 0,
          explanation:
            'Queue lag shows that work is accumulating faster than it is being processed. It is an important operational signal for asynchronous systems because it can indicate overload, stuck consumers, or downstream slowness.',
        },
        {
          id: 'sd-obs-10',
          prompt:
            'What is the best interview-level reason to mention metrics, logs, and traces together?',
          choices: [
            'Because each gives a different kind of visibility, and together they make systems much easier to operate and debug',
            'Because one of them is required by all databases',
            'Because they eliminate the need for reliability design',
            'Because they are only useful in small systems',
          ],
          correctIndex: 0,
          explanation:
            'Metrics, logs, and traces are complementary. Metrics help detect trends and alert on symptoms, logs provide detailed event context, and traces reveal cross-service request flow. Strong observability usually uses all three in a coordinated way.',
        },
      ],
    },
    security: {
      title: 'Security',
      description:
        'Authentication, authorization, and secure system boundaries',
      explanation:
        'Security in systems design is about protecting users, data, and infrastructure from unauthorized access, misuse, and compromise. In interviews, strong candidates do not try to turn every design into a full security deep dive, but they do show awareness of key boundaries and controls. That usually means identifying who is allowed to access the system, how identity is verified, what actions each actor is allowed to perform, how sensitive data is protected in transit and at rest, and how internal services are prevented from overtrusting one another. Good answers also mention practical protections like rate limiting, secrets management, least privilege, input validation, audit logging, and blast-radius reduction. The goal is not to list every security buzzword. The goal is to show that the design has sensible trust boundaries and that important data paths are protected.',
      vocab: [
        {
          term: 'authentication',
          definition:
            'The process of verifying who a user or service is.',
        },
        {
          term: 'authorization',
          definition:
            'The process of deciding what an authenticated user or service is allowed to do.',
        },
        {
          term: 'identity',
          definition:
            'The claimed user, account, service, or principal interacting with the system.',
        },
        {
          term: 'session',
          definition:
            'A server-side or client-associated authenticated interaction period.',
        },
        {
          term: 'access token',
          definition:
            'A credential presented by a client or service to prove authenticated access.',
        },
        {
          term: 'refresh token',
          definition:
            'A longer-lived credential used to obtain new access tokens.',
        },
        {
          term: 'least privilege',
          definition:
            'Granting only the minimum permissions needed for a user or service to perform its job.',
        },
        {
          term: 'role-based access control',
          definition:
            'An authorization model where permissions are assigned based on roles.',
        },
        {
          term: 'permission',
          definition:
            'A specific allowed action on a resource.',
        },
        {
          term: 'principal',
          definition:
            'An authenticated actor such as a user, service, or application.',
        },
        {
          term: 'TLS',
          definition:
            'Transport Layer Security, used to protect data in transit across the network.',
        },
        {
          term: 'encryption at rest',
          definition:
            'Protecting stored data so it is unreadable without the appropriate cryptographic key.',
        },
        {
          term: 'secret',
          definition:
            'Sensitive credential material such as API keys, passwords, or signing keys.',
        },
        {
          term: 'secrets management',
          definition:
            'Secure storage, rotation, and access control for credentials and keys.',
        },
        {
          term: 'input validation',
          definition:
            'Checking incoming data to ensure it is well-formed, expected, and safe to process.',
        },
        {
          term: 'audit log',
          definition:
            'A durable record of important security-relevant actions such as logins or permission changes.',
        },
        {
          term: 'trust boundary',
          definition:
            'A point where data or requests cross between different security domains or privilege levels.',
        },
        {
          term: 'mTLS',
          definition:
            'Mutual TLS, where both client and server authenticate each other using certificates.',
        },
        {
          term: 'defense in depth',
          definition:
            'Using multiple layers of protection so one failure does not fully compromise the system.',
        },
        {
          term: 'zero trust',
          definition:
            'A security model that avoids implicit trust based solely on network location and requires verification at each boundary.',
        },
      ],
      questions: [
        {
          id: 'sd-sec-1',
          prompt:
            'What is the difference between authentication and authorization?',
          choices: [
            'Authentication verifies identity, while authorization determines allowed actions',
            'Authentication grants permissions, while authorization encrypts traffic',
            'Authentication only applies to databases, while authorization only applies to APIs',
            'They are the same thing with different names',
          ],
          correctIndex: 0,
          explanation:
            'Authentication answers “who are you?” and authorization answers “what are you allowed to do?” Strong systems need both. A user might be validly logged in but still not allowed to read another user’s private data or perform admin actions.',
        },
        {
          id: 'sd-sec-2',
          prompt:
            'Why is least privilege an important security principle?',
          choices: [
            'It limits damage by giving users and services only the permissions they actually need',
            'It makes logging unnecessary',
            'It guarantees zero vulnerabilities',
            'It removes the need for authentication',
          ],
          correctIndex: 0,
          explanation:
            'Least privilege reduces blast radius. If one account, service, or credential is compromised, the attacker should not automatically gain access to everything. Narrow permissions help contain incidents and reduce accidental misuse too.',
        },
        {
          id: 'sd-sec-3',
          prompt:
            'Why should sensitive traffic usually use TLS?',
          choices: [
            'To protect data in transit from interception or tampering',
            'To make databases faster',
            'To replace application-level authorization',
            'To avoid all need for encryption at rest',
          ],
          correctIndex: 0,
          explanation:
            'TLS protects network traffic between clients and servers or between internal services. Without it, credentials, tokens, and private data may be exposed to interception or manipulation while crossing the network.',
        },
        {
          id: 'sd-sec-4',
          prompt:
            'What is a trust boundary in a system design?',
          choices: [
            'A point where data or requests move between different security domains or privilege levels',
            'The place where logs are rotated',
            'A part of the UI where dark mode is configured',
            'A database index used only for admins',
          ],
          correctIndex: 0,
          explanation:
            'Trust boundaries are critical because assumptions about identity, input safety, or permissions often change when crossing them. Examples include internet-facing API edges, service-to-service calls, and transitions into privileged internal systems.',
        },
        {
          id: 'sd-sec-5',
          prompt:
            'Why is storing raw secrets directly in source code a bad idea?',
          choices: [
            'Because secrets can leak through repos, logs, builds, and developer environments',
            'Because source code cannot represent strings safely',
            'Because secrets only work in environment variables',
            'Because compiled code always removes all embedded secrets automatically',
          ],
          correctIndex: 0,
          explanation:
            'Hardcoded secrets are difficult to rotate and easy to leak through version control, screenshots, CI logs, and local machines. Secure systems usually use dedicated secrets management with access controls and rotation support.',
        },
        {
          id: 'sd-sec-6',
          prompt:
            'What is the main purpose of authorization checks on resource access?',
          choices: [
            'To ensure an authenticated actor can only access resources they are permitted to use',
            'To reduce network latency',
            'To guarantee idempotency',
            'To balance load across servers',
          ],
          correctIndex: 0,
          explanation:
            'It is not enough to know who the user is. The system must also verify that this identity has rights to perform the requested action on the specific resource, such as reading one account, deleting one file, or approving one payment.',
        },
        {
          id: 'sd-sec-7',
          prompt:
            'Why are audit logs valuable in security-sensitive systems?',
          choices: [
            'They record important actions for investigation, compliance, and accountability',
            'They replace the need for authentication',
            'They make encryption unnecessary',
            'They only matter for frontend styling changes',
          ],
          correctIndex: 0,
          explanation:
            'Audit logs help teams understand who did what and when, especially for privileged actions like login attempts, data exports, permission changes, and financial operations. They are useful for incident response, compliance, and internal accountability.',
        },
        {
          id: 'sd-sec-8',
          prompt:
            'What is a good reason to validate and sanitize input at system boundaries?',
          choices: [
            'Untrusted input can be malformed, malicious, or dangerous if processed blindly',
            'Input validation makes authentication optional',
            'Trusted internal systems never send bad data',
            'Validation only matters for frontend forms',
          ],
          correctIndex: 0,
          explanation:
            'Inputs crossing system boundaries should be treated as untrusted. Validation helps reject malformed requests early, enforce expected schema and size constraints, and reduce security risks from dangerous or unexpected payloads.',
        },
        {
          id: 'sd-sec-9',
          prompt:
            'Why might internal service-to-service calls also need authentication and authorization?',
          choices: [
            'Because internal networks should not be blindly trusted',
            'Because only public internet traffic can be attacked',
            'Because internal services never share sensitive data',
            'Because mTLS is only for frontend browsers',
          ],
          correctIndex: 0,
          explanation:
            'Modern systems often treat internal traffic as potentially risky too. Misconfigured services, credential leaks, lateral movement, and compromised machines can all turn internal trust assumptions into major vulnerabilities.',
        },
        {
          id: 'sd-sec-10',
          prompt:
            'What does defense in depth mean?',
          choices: [
            'Using multiple security layers so one failed control does not fully expose the system',
            'Putting all security logic into one service for simplicity',
            'Encrypting only the most popular endpoints',
            'Disabling logs to reduce attack surface',
          ],
          correctIndex: 0,
          explanation:
            'Defense in depth acknowledges that any one control can fail. Good designs combine authentication, authorization, encryption, validation, rate limiting, monitoring, network controls, and auditing so the system is not depending on a single perfect barrier.',
        },
      ],
    },
    tradeoffs: {
      title: 'Tradeoffs',
      description:
        'Communicating decisions and comparing competing approaches',
      explanation:
        'Tradeoff discussion is one of the most important parts of a systems design interview. A strong answer is not just a list of components. It is an explanation of why a particular design is appropriate given the requirements and what is being sacrificed in return. Every major system choice has a cost: stronger consistency may increase latency, denormalization may improve reads but complicate writes, caching may speed responses but introduce staleness, and asynchronous workflows may improve availability but delay completion. Good candidates make these tensions explicit. They compare realistic alternatives, explain why one is better for the stated constraints, and show how the design might evolve if the requirements changed. This is often what separates shallow architecture talk from actual engineering judgment.',
      vocab: [
        {
          term: 'tradeoff',
          definition:
            'A decision where improving one property or requirement comes at the cost of another.',
        },
        {
          term: 'constraint',
          definition:
            'A limit or requirement that shapes which solutions are acceptable.',
        },
        {
          term: 'latency versus consistency',
          definition:
            'A common tradeoff where fresher or more coordinated reads and writes may increase response time.',
        },
        {
          term: 'availability versus correctness',
          definition:
            'A tension where serving more requests during failures may sometimes allow stale or weaker guarantees.',
        },
        {
          term: 'read optimization',
          definition:
            'Design choices that improve read performance, often at some cost to writes or complexity.',
        },
        {
          term: 'write amplification',
          definition:
            'Extra work caused by one logical write triggering multiple underlying writes or updates.',
        },
        {
          term: 'operational complexity',
          definition:
            'The deployment, debugging, maintenance, and on-call burden created by a design.',
        },
        {
          term: 'scalability',
          definition:
            'How well a system can grow to handle more load, users, or data.',
        },
        {
          term: 'simplicity',
          definition:
            'Keeping the design understandable, maintainable, and minimally complex for the requirements.',
        },
        {
          term: 'cost efficiency',
          definition:
            'Achieving the required behavior without unnecessary infrastructure or expense.',
        },
        {
          term: 'flexibility',
          definition:
            'How easily the system can adapt to future changes in features or workload.',
        },
        {
          term: 'performance',
          definition:
            'How quickly and efficiently the system serves requests or processes work.',
        },
        {
          term: 'correctness',
          definition:
            'Whether the system consistently produces the intended and valid results.',
        },
        {
          term: 'premature optimization',
          definition:
            'Adding complexity for scale or performance before the requirements justify it.',
        },
        {
          term: 'design evolution',
          definition:
            'How a system can change over time as traffic, requirements, or constraints grow.',
        },
        {
          term: 'bottleneck-driven design',
          definition:
            'Improving the architecture by addressing actual limiting factors rather than theoretical ones.',
        },
        {
          term: 'local optimum',
          definition:
            'A choice that looks best for one subsystem but is worse for the overall system.',
        },
        {
          term: 'cost-benefit analysis',
          definition:
            'Evaluating whether the gains of a design decision are worth its complexity or expense.',
        },
        {
          term: 'requirements alignment',
          definition:
            'The degree to which a design decision matches the actual stated needs of the system.',
        },
        {
          term: 'engineering judgment',
          definition:
            'The ability to choose between imperfect options in a reasoned, context-aware way.',
        },
      ],
      questions: [
        {
          id: 'sd-trade-1',
          prompt:
            'What makes tradeoff discussion valuable in a systems design interview?',
          choices: [
            'It shows you can justify decisions rather than just naming components',
            'It avoids the need to discuss requirements',
            'It proves one architecture is universally correct',
            'It means you do not need a final design recommendation',
          ],
          correctIndex: 0,
          explanation:
            'Interviewers are usually evaluating judgment, not just vocabulary. A good systems designer explains why a choice fits the requirements and what costs it introduces. That reasoning is often more important than the specific product names in the stack.',
        },
        {
          id: 'sd-trade-2',
          prompt:
            'Which is the best example of a real systems design tradeoff?',
          choices: [
            'Caching can lower latency but may return stale data',
            'Primary keys are better than bad code comments',
            'Dark mode is better than light mode for all users',
            'All distributed systems should use the same database',
          ],
          correctIndex: 0,
          explanation:
            'This is a classic tradeoff because the performance gain from caching often comes with the risk of staleness and invalidation complexity. Good system design is often about recognizing and managing such tensions.',
        },
        {
          id: 'sd-trade-3',
          prompt:
            'Why is it usually a mistake to optimize everything for maximum scale from day one?',
          choices: [
            'Because premature complexity can make the system harder and more expensive than the requirements justify',
            'Because systems never grow after launch',
            'Because scaling only matters for mobile apps',
            'Because simple systems cannot be monitored',
          ],
          correctIndex: 0,
          explanation:
            'Overengineering can hurt delivery speed, maintainability, and operational simplicity. Strong candidates often start with a simpler design that fits current requirements, then explain how it would evolve as scale or correctness demands increase.',
        },
        {
          id: 'sd-trade-4',
          prompt:
            'What is the best way to compare two competing design approaches?',
          choices: [
            'Evaluate them against the stated requirements, constraints, and likely failure modes',
            'Pick the one with more moving parts',
            'Pick whichever uses more distributed systems terminology',
            'Avoid comparing them and present both as equally good',
          ],
          correctIndex: 0,
          explanation:
            'Design choices should be judged relative to the system’s actual needs. One approach may be better for low latency, another for stronger correctness, and another for lower operational cost. The right answer depends on the constraints.',
        },
        {
          id: 'sd-trade-5',
          prompt:
            'What is a good reason to mention operational complexity as part of a tradeoff?',
          choices: [
            'Because a design that looks powerful on paper may be hard to deploy, debug, and maintain in reality',
            'Because operations never matter in interview settings',
            'Because operational complexity always improves performance',
            'Because complex systems do not need observability',
          ],
          correctIndex: 0,
          explanation:
            'Architecture is not just about theoretical capabilities. A design may be scalable and feature-rich, but if it is too hard to operate, recover, or debug, it may be the wrong choice for the team and requirements.',
        },
        {
          id: 'sd-trade-6',
          prompt:
            'Which statement best reflects strong systems design judgment?',
          choices: [
            'Choose the simplest design that satisfies the important requirements, then evolve as needed',
            'Always use the most advanced architecture available',
            'Never discuss downsides of your proposal',
            'Assume every system needs identical guarantees',
          ],
          correctIndex: 0,
          explanation:
            'This reflects practical engineering judgment. The goal is not maximum complexity. It is a design that fits the current problem well and has a credible path for future growth or added requirements.',
        },
        {
          id: 'sd-trade-7',
          prompt:
            'Why is “it depends” not enough by itself in a systems design interview?',
          choices: [
            'Because you still need to explain what it depends on and make a recommendation',
            'Because tradeoffs never actually depend on context',
            'Because interviews only care about final diagrams',
            'Because requirements should be ignored once architecture starts',
          ],
          correctIndex: 0,
          explanation:
            'Tradeoffs are contextual, so “it depends” is often true. But the value comes from identifying the important variables, explaining their impact, and then choosing the best option for the stated constraints.',
        },
        {
          id: 'sd-trade-8',
          prompt:
            'What is the main risk of choosing an architecture based only on one metric, such as latency?',
          choices: [
            'You may damage other important properties like correctness, cost, or operability',
            'The system will stop using databases',
            'Latency automatically becomes worse anyway',
            'One metric is always enough for every business problem',
          ],
          correctIndex: 0,
          explanation:
            'Real systems must balance multiple concerns. A latency-optimized design might increase stale reads, operational burden, or infrastructure cost. Good designers evaluate the full set of relevant requirements, not just one dimension.',
        },
        {
          id: 'sd-trade-9',
          prompt:
            'What is the best reason to mention how your design could evolve later?',
          choices: [
            'It shows awareness that architecture should grow with changing scale and requirements',
            'It avoids committing to any design now',
            'It proves the initial design is wrong',
            'It means current constraints no longer matter',
          ],
          correctIndex: 0,
          explanation:
            'Mentioning evolution shows pragmatic thinking. You can propose a simpler current-state design while also explaining how you would add sharding, queues, caching, or stronger isolation later if demand or requirements grow.',
        },
        {
          id: 'sd-trade-10',
          prompt:
            'When communicating a tradeoff, what is the strongest structure?',
          choices: [
            'State the decision, name the benefit, name the cost, and explain why it is acceptable for this system',
            'List five technologies quickly and move on',
            'Avoid mentioning downsides so the design sounds stronger',
            'Always describe both options as equally valid without choosing',
          ],
          correctIndex: 0,
          explanation:
            'This structure makes your reasoning easy to follow. It shows the interviewer that you understand both sides of the decision and that your choice is grounded in the system’s actual needs rather than generic preference.',
        },
      ],
    },
    cdnEdge: {
      title: 'CDN / Edge Networks',
      description:
        'Geographic distribution, caching closer to users, and edge delivery tradeoffs',
      explanation:
        'CDNs and edge networks are used to move content and some computation closer to users so responses are faster, origin infrastructure handles less load, and global traffic is served more efficiently. In systems design interviews, strong candidates understand that a CDN is not just “a cache somewhere on the internet.” It is a geographically distributed layer that can cache static assets, accelerate dynamic content in some cases, terminate TLS, enforce security rules, and sometimes run lightweight logic at the edge. Good answers explain what content is cacheable, how cache keys are chosen, how invalidation works, what still must go to origin, and how edge delivery affects latency, origin cost, and consistency. The goal is to show when a CDN is a major win and when it does not solve the underlying problem.',
      vocab: [
        {
          term: 'CDN',
          definition:
            'A content delivery network that serves content from geographically distributed locations closer to users.',
        },
        {
          term: 'edge location',
          definition:
            'A distributed point of presence where CDN content is cached and served near users.',
        },
        {
          term: 'origin',
          definition:
            'The backend server or storage system where content originally comes from.',
        },
        {
          term: 'cache key',
          definition:
            'The identity the CDN uses to decide whether two requests should share a cached response.',
        },
        {
          term: 'cache invalidation',
          definition:
            'The process of removing or refreshing outdated content from CDN caches.',
        },
        {
          term: 'TTL',
          definition:
            'Time to live, the duration a CDN can serve cached content before revalidation or expiration.',
        },
        {
          term: 'cache hit',
          definition:
            'A request served directly from the CDN cache without going to origin.',
        },
        {
          term: 'cache miss',
          definition:
            'A request the CDN cannot serve from cache and must fetch from origin.',
        },
        {
          term: 'static asset',
          definition:
            'Content like images, CSS, JavaScript, or video files that is commonly cacheable.',
        },
        {
          term: 'dynamic content',
          definition:
            'Personalized or changing content that may be less cacheable or require special strategies.',
        },
        {
          term: 'edge compute',
          definition:
            'Running lightweight logic at or near CDN edge locations before reaching origin.',
        },
        {
          term: 'TLS termination',
          definition:
            'Handling encrypted HTTPS connections at the CDN or edge layer.',
        },
        {
          term: 'purge',
          definition:
            'An explicit request to remove cached objects from CDN storage.',
        },
        {
          term: 'signed URL',
          definition:
            'A URL containing authorization information so protected content can be served securely.',
        },
        {
          term: 'geo latency',
          definition:
            'The network delay caused by physical distance between users and infrastructure.',
        },
        {
          term: 'point of presence',
          definition:
            'A physical CDN site or region serving nearby traffic.',
        },
        {
          term: 'edge security filtering',
          definition:
            'Blocking or rate-limiting malicious traffic at the edge before it reaches origin.',
        },
        {
          term: 'origin shield',
          definition:
            'An extra CDN layer or region used to reduce repeated origin fetches and protect origin infrastructure.',
        },
        {
          term: 'cache-control header',
          definition:
            'HTTP metadata that tells intermediaries how and whether a response may be cached.',
        },
        {
          term: 'stale content window',
          definition:
            'A period during which cached data may lag behind the newest origin version.',
        },
      ],
      questions: [
        {
          id: 'sd-cdn-1',
          prompt:
            'What is the main reason to use a CDN?',
          choices: [
            'To serve content closer to users and reduce load on origin systems',
            'To replace all backend databases',
            'To guarantee strong consistency for every request',
            'To eliminate the need for application servers',
          ],
          correctIndex: 0,
          explanation:
            'A CDN primarily improves latency and scalability by serving cacheable content from distributed edge locations. It also reduces repeated requests hitting the origin.',
        },
        {
          id: 'sd-cdn-2',
          prompt:
            'Which type of content is usually the best candidate for CDN caching?',
          choices: [
            'Static assets like images, CSS, and JavaScript',
            'Highly personalized per-user account balances',
            'One-time transactional writes',
            'Database migration scripts',
          ],
          correctIndex: 0,
          explanation:
            'Static assets are commonly reused across many users and change less often, making them ideal for CDN caching. Personalized sensitive responses are usually much harder to cache safely.',
        },
        {
          id: 'sd-cdn-3',
          prompt:
            'What is a cache hit at the CDN layer?',
          choices: [
            'The CDN serves the response without contacting the origin',
            'The origin database completes a write successfully',
            'The user refreshes the browser twice',
            'The CDN restarts an edge server',
          ],
          correctIndex: 0,
          explanation:
            'A cache hit means the requested object is already stored at the CDN edge and can be returned immediately, improving latency and reducing origin traffic.',
        },
        {
          id: 'sd-cdn-4',
          prompt:
            'Why can cache invalidation be difficult with CDNs?',
          choices: [
            'Because outdated content may already exist across many distributed edge caches',
            'Because CDNs cannot store any metadata',
            'Because invalidation only works for video files',
            'Because TTLs remove the need for invalidation planning',
          ],
          correctIndex: 0,
          explanation:
            'Once content is distributed globally, updating or purging it everywhere can be operationally tricky. This is a classic consistency tradeoff with caching systems.',
        },
        {
          id: 'sd-cdn-5',
          prompt:
            'What does a cache key control in a CDN?',
          choices: [
            'Which requests are considered equivalent for cached reuse',
            'Which developers can edit production code',
            'How many pods run in Kubernetes',
            'Whether the database is relational',
          ],
          correctIndex: 0,
          explanation:
            'The cache key determines what differentiates one response from another. If it is designed poorly, users may get the wrong cached content or the cache may fragment badly.',
        },
        {
          id: 'sd-cdn-6',
          prompt:
            'Why might personalized API responses be harder to cache at the CDN?',
          choices: [
            'Because responses may differ by user and caching can risk incorrect or unsafe sharing',
            'Because CDNs only support image files',
            'Because HTTPS prevents caching',
            'Because edge locations cannot read headers',
          ],
          correctIndex: 0,
          explanation:
            'Per-user responses often vary by identity, permissions, or session state. That makes safe shared caching much harder and increases the importance of correct cache keys and headers.',
        },
        {
          id: 'sd-cdn-7',
          prompt:
            'What is one important benefit of edge security filtering?',
          choices: [
            'Malicious or excessive traffic can be blocked before reaching the origin',
            'It guarantees all requests are cache hits',
            'It replaces authentication completely',
            'It removes the need for logs and metrics',
          ],
          correctIndex: 0,
          explanation:
            'The edge layer can absorb or reject abusive traffic earlier, which reduces origin load and improves resilience during attacks or spikes.',
        },
        {
          id: 'sd-cdn-8',
          prompt:
            'What is the role of the origin in a CDN-backed architecture?',
          choices: [
            'It is the authoritative source the CDN fetches content from on misses or refreshes',
            'It is the same thing as the browser cache',
            'It only exists for staging environments',
            'It replaces DNS resolution',
          ],
          correctIndex: 0,
          explanation:
            'The CDN is an optimization and distribution layer. The origin remains the source of truth for the underlying content or application response.',
        },
        {
          id: 'sd-cdn-9',
          prompt:
            'When might edge compute be useful?',
          choices: [
            'When lightweight request logic should run near users before hitting the origin',
            'When the full database should be moved into every browser',
            'When all application logic needs strong transactions at the edge',
            'When the team wants to avoid all network routing decisions',
          ],
          correctIndex: 0,
          explanation:
            'Edge compute can help with lightweight personalization, redirects, headers, auth preprocessing, or request filtering. It is useful when running small logic close to users provides value.',
        },
        {
          id: 'sd-cdn-10',
          prompt:
            'What is the best high-level way to talk about CDNs in a systems design interview?',
          choices: [
            'Explain what content is cacheable, how freshness is managed, and how the CDN reduces latency and origin load',
            'Say “put it behind a CDN” and move on without details',
            'Assume a CDN makes all dynamic systems globally consistent',
            'Treat a CDN as a direct replacement for application design',
          ],
          correctIndex: 0,
          explanation:
            'A strong answer shows you understand both the benefits and the limits of CDNs. You should be able to explain what is cached, what is not, and how consistency and invalidation are handled.',
        },
      ],
    },
    apiDesign: {
      title: 'API Design',
      description:
        'Resource modeling, contracts, versioning, and interface tradeoffs',
      explanation:
        'API design is about defining how clients interact with a system in a way that is clear, maintainable, secure, and efficient. In systems design interviews, strong candidates treat APIs as contracts, not just endpoints. Good API design reflects the system’s resources and workflows, exposes the right data without unnecessary coupling, and considers pagination, filtering, idempotency, authentication, error handling, rate limits, and backward compatibility. Strong answers also recognize tradeoffs between styles such as REST, RPC, and GraphQL depending on the workload. The goal is not to memorize naming conventions. The goal is to design interfaces that are understandable to clients and sustainable for the system over time.',
      vocab: [
        {
          term: 'API',
          definition:
            'An application programming interface through which clients interact with a service.',
        },
        {
          term: 'endpoint',
          definition:
            'A specific path or operation exposed by an API.',
        },
        {
          term: 'resource',
          definition:
            'A logical entity represented by the API, such as a user, order, or document.',
        },
        {
          term: 'REST',
          definition:
            'A common API style centered around resources, HTTP verbs, and stateless interactions.',
        },
        {
          term: 'RPC',
          definition:
            'A remote procedure call style where the API exposes operations more directly as callable actions.',
        },
        {
          term: 'GraphQL',
          definition:
            'An API approach where clients request specific fields and shapes of data through a query layer.',
        },
        {
          term: 'idempotent endpoint',
          definition:
            'An API operation that can be retried safely without changing the final result beyond the first successful application.',
        },
        {
          term: 'pagination',
          definition:
            'Splitting large result sets into smaller retrievable chunks.',
        },
        {
          term: 'cursor pagination',
          definition:
            'Pagination using a stable continuation token or position rather than numeric offsets.',
        },
        {
          term: 'offset pagination',
          definition:
            'Pagination based on skipping a fixed number of rows before returning the next page.',
        },
        {
          term: 'filtering',
          definition:
            'Restricting returned results based on client-specified criteria.',
        },
        {
          term: 'sorting',
          definition:
            'Ordering API results according to one or more fields.',
        },
        {
          term: 'versioning',
          definition:
            'Managing API changes over time so clients are not broken unexpectedly.',
        },
        {
          term: 'backward compatibility',
          definition:
            'The ability to evolve an API without breaking existing clients.',
        },
        {
          term: 'contract',
          definition:
            'The expected request and response behavior clients rely on.',
        },
        {
          term: 'status code',
          definition:
            'An HTTP response code indicating the result class of a request.',
        },
        {
          term: 'error payload',
          definition:
            'The structured information returned when an API request fails.',
        },
        {
          term: 'rate limit',
          definition:
            'A control restricting how many API requests a client can make over time.',
        },
        {
          term: 'schema',
          definition:
            'The structure and types of fields expected in API requests or responses.',
        },
        {
          term: 'overfetching',
          definition:
            'Returning more data than the client actually needs.',
        },
      ],
      questions: [
        {
          id: 'sd-api-1',
          prompt:
            'What is the main goal of good API design?',
          choices: [
            'To create a clear, stable contract between clients and the system',
            'To maximize the number of endpoints regardless of need',
            'To avoid versioning at all costs',
            'To return the largest possible payload on every request',
          ],
          correctIndex: 0,
          explanation:
            'An API is a contract clients depend on. Good design makes that contract understandable, usable, and maintainable over time.',
        },
        {
          id: 'sd-api-2',
          prompt:
            'Why is pagination important in API design?',
          choices: [
            'Because large result sets should usually be split into manageable pages',
            'Because APIs cannot return arrays otherwise',
            'Because pagination guarantees strong consistency',
            'Because it replaces filtering and sorting',
          ],
          correctIndex: 0,
          explanation:
            'Pagination protects both clients and servers from excessively large responses and makes data retrieval more practical and scalable.',
        },
        {
          id: 'sd-api-3',
          prompt:
            'When is cursor pagination often better than offset pagination?',
          choices: [
            'When large or changing datasets make stable continuation more important',
            'When no ordering exists at all',
            'When clients need random page 500 instantly by index only',
            'When the API has no persistent storage',
          ],
          correctIndex: 0,
          explanation:
            'Cursor pagination is often more stable and efficient for large changing datasets because it avoids expensive skips and reduces inconsistency caused by inserted or deleted rows.',
        },
        {
          id: 'sd-api-4',
          prompt:
            'Why does backward compatibility matter in APIs?',
          choices: [
            'Because existing clients may still rely on older request and response behavior',
            'Because all clients upgrade instantly with every deployment',
            'Because API changes never affect integrations',
            'Because it only matters for internal services',
          ],
          correctIndex: 0,
          explanation:
            'API consumers may lag behind or be outside your direct control. Breaking them carelessly creates outages and integration pain, so evolution usually needs compatibility planning.',
        },
        {
          id: 'sd-api-5',
          prompt:
            'What is overfetching in API design?',
          choices: [
            'Returning more data than the client actually needs',
            'Fetching too little data for the database',
            'Calling an API without authentication',
            'Sending too many retries after a timeout',
          ],
          correctIndex: 0,
          explanation:
            'Overfetching wastes bandwidth and client processing. Good API design tries to expose useful responses without forcing clients to retrieve lots of irrelevant data.',
        },
        {
          id: 'sd-api-6',
          prompt:
            'Why is structured error payload design useful?',
          choices: [
            'It helps clients understand what failed and how to respond programmatically',
            'It makes status codes unnecessary',
            'It guarantees no request will fail',
            'It should only be used in staging',
          ],
          correctIndex: 0,
          explanation:
            'A useful API error response includes enough structure for clients to debug, display appropriate messages, or take corrective action without guessing.',
        },
        {
          id: 'sd-api-7',
          prompt:
            'When is an idempotent API endpoint especially valuable?',
          choices: [
            'When clients may retry after timeouts and duplicate side effects would be harmful',
            'When every request must always create a new unique side effect',
            'When the API only serves static images',
            'When no network failures are possible',
          ],
          correctIndex: 0,
          explanation:
            'Retries are common in distributed systems. Idempotent design is especially important for operations like payments, order creation, and job submission.',
        },
        {
          id: 'sd-api-8',
          prompt:
            'What is a strong reason to include filtering and sorting in list APIs?',
          choices: [
            'They let clients retrieve relevant subsets efficiently instead of pulling everything',
            'They remove the need for pagination',
            'They guarantee lower latency in every backend design',
            'They only matter for admin dashboards',
          ],
          correctIndex: 0,
          explanation:
            'Filtering and sorting make APIs more practical and efficient by letting clients ask for the data they actually need rather than forcing broad full-list retrieval.',
        },
        {
          id: 'sd-api-9',
          prompt:
            'What is the main tradeoff GraphQL is often trying to address?',
          choices: [
            'Giving clients more control over response shape to reduce underfetching or overfetching',
            'Replacing authentication with query syntax',
            'Guaranteeing simpler backend implementations',
            'Eliminating the need for schema design',
          ],
          correctIndex: 0,
          explanation:
            'GraphQL is often chosen when client flexibility matters a lot. Its strength is allowing clients to request exactly the fields they need, though it introduces other complexity.',
        },
        {
          id: 'sd-api-10',
          prompt:
            'What is the best interview-level way to discuss API design?',
          choices: [
            'Describe the client contract, resource or operation model, result shaping, errors, versioning, and retry/backward-compatibility concerns',
            'Only list endpoint names without explaining behavior',
            'Focus entirely on HTTP status codes and nothing else',
            'Assume API design is separate from system design',
          ],
          correctIndex: 0,
          explanation:
            'A strong answer treats the API as part of the architecture. It explains how clients interact with the system and how that interface remains scalable and usable over time.',
        },
      ],
    },
    search: {
      title: 'Search',
      description:
        'Indexing, retrieval, ranking, and query-serving architecture',
      explanation:
        'Search systems are designed to let users retrieve relevant results quickly from large collections of documents, products, messages, or other content. In systems design interviews, strong candidates separate the problem into ingestion, indexing, query serving, ranking, and freshness. Good answers explain how raw content is transformed into an index, how queries are parsed, how candidate results are retrieved efficiently, and how those candidates are ranked by relevance. They also discuss autocomplete, typo tolerance, filtering, faceting, pagination, and tradeoffs between freshness and latency. The goal is not to say “use Elasticsearch” and stop. The goal is to show you understand the architecture and the decisions behind a scalable, relevant search experience.',
      vocab: [
        {
          term: 'index',
          definition:
            'A data structure optimized for retrieving documents or records that match search queries.',
        },
        {
          term: 'inverted index',
          definition:
            'A structure mapping terms to the documents containing them, fundamental to many text search engines.',
        },
        {
          term: 'document',
          definition:
            'A searchable unit such as a web page, product, message, or article.',
        },
        {
          term: 'tokenization',
          definition:
            'Breaking text into searchable terms or tokens during indexing or query processing.',
        },
        {
          term: 'query parsing',
          definition:
            'Interpreting the user’s search input into terms, operators, filters, or structured intent.',
        },
        {
          term: 'retrieval',
          definition:
            'The process of finding candidate results that may match a query.',
        },
        {
          term: 'ranking',
          definition:
            'Ordering retrieved candidates by estimated relevance or usefulness.',
        },
        {
          term: 'relevance',
          definition:
            'How well a result matches the user’s query and intent.',
        },
        {
          term: 'BM25',
          definition:
            'A common relevance scoring method used in text retrieval systems.',
        },
        {
          term: 'autocomplete',
          definition:
            'Suggesting likely queries or completions as the user types.',
        },
        {
          term: 'typeahead',
          definition:
            'Real-time search suggestion behavior while a query is being entered.',
        },
        {
          term: 'facet',
          definition:
            'A grouped filter dimension such as brand, category, or price range in search results.',
        },
        {
          term: 'filter',
          definition:
            'A constraint narrowing results by structured fields without necessarily affecting keyword relevance.',
        },
        {
          term: 'freshness',
          definition:
            'How quickly new or changed data becomes searchable.',
        },
        {
          term: 'indexing pipeline',
          definition:
            'The process that ingests source data, transforms it, and writes it into the search index.',
        },
        {
          term: 'shard',
          definition:
            'A partition of the search index distributed across machines for scale.',
        },
        {
          term: 'replica',
          definition:
            'A duplicate of a search shard used for availability or read scaling.',
        },
        {
          term: 'query latency',
          definition:
            'The time it takes to return search results after a query is issued.',
        },
        {
          term: 'typo tolerance',
          definition:
            'Support for matching likely intended terms even when the query is misspelled.',
        },
        {
          term: 'recall versus precision',
          definition:
            'The balance between finding more possibly relevant results and ensuring returned results are highly relevant.',
        },
      ],
      questions: [
        {
          id: 'sd-search-1',
          prompt:
            'What is the main purpose of an inverted index in text search?',
          choices: [
            'To map terms to documents containing them for efficient retrieval',
            'To store user sessions by region',
            'To replace ranking completely',
            'To enforce rate limits on queries',
          ],
          correctIndex: 0,
          explanation:
            'An inverted index is the core retrieval structure in many search engines. Instead of scanning every document, the engine can jump directly from query terms to candidate documents.',
        },
        {
          id: 'sd-search-2',
          prompt:
            'Why is tokenization important in a search system?',
          choices: [
            'Because documents and queries need to be broken into searchable terms consistently',
            'Because it guarantees perfect ranking',
            'Because it replaces indexing',
            'Because it only matters for autocomplete',
          ],
          correctIndex: 0,
          explanation:
            'Tokenization affects what terms are searchable and how matching works. Poor tokenization can damage both recall and relevance.',
        },
        {
          id: 'sd-search-3',
          prompt:
            'What is the difference between retrieval and ranking?',
          choices: [
            'Retrieval finds candidate matches, while ranking orders them by relevance',
            'Retrieval sorts final results alphabetically, while ranking stores the index',
            'They are exactly the same stage',
            'Ranking happens before any candidate results are found',
          ],
          correctIndex: 0,
          explanation:
            'Search often works in stages. Retrieval narrows the space to plausible matches, then ranking decides which of those matches should appear first.',
        },
        {
          id: 'sd-search-4',
          prompt:
            'Why is freshness an important search-system concern?',
          choices: [
            'Because users often expect new or updated content to become searchable quickly',
            'Because stale search results only affect internal logging',
            'Because freshness removes the need for ranking',
            'Because indexes should never be updated after creation',
          ],
          correctIndex: 0,
          explanation:
            'A search system that returns outdated content can feel broken, especially for products, messages, news, or fast-changing documents. Freshness is therefore a key architecture tradeoff.',
        },
        {
          id: 'sd-search-5',
          prompt:
            'What is a facet in search?',
          choices: [
            'A grouped filter dimension such as category, brand, or price range',
            'A way to encrypt search queries',
            'A replication policy for search shards',
            'A synonym expansion algorithm only',
          ],
          correctIndex: 0,
          explanation:
            'Facets help users narrow results interactively using structured dimensions. They are especially common in e-commerce and catalog search.',
        },
        {
          id: 'sd-search-6',
          prompt:
            'Why might autocomplete be implemented separately from full search ranking?',
          choices: [
            'Because typeahead needs extremely low latency and often uses different data structures and ranking signals',
            'Because autocomplete never uses indexed data',
            'Because full search cannot return partial matches',
            'Because autocomplete only works on mobile devices',
          ],
          correctIndex: 0,
          explanation:
            'Autocomplete has stricter latency needs and a different UX goal than full result ranking. It often uses specialized prefix-oriented or query-log-based structures.',
        },
        {
          id: 'sd-search-7',
          prompt:
            'What does typo tolerance improve?',
          choices: [
            'The ability to still return useful results when users misspell queries',
            'The consistency of distributed transactions',
            'The write throughput of the primary database',
            'The strength of API authentication',
          ],
          correctIndex: 0,
          explanation:
            'Users often make spelling mistakes or partial inputs. Typo tolerance improves recall and usability by helping the system recover from those imperfect queries.',
        },
        {
          id: 'sd-search-8',
          prompt:
            'Why are shards used in large search systems?',
          choices: [
            'To partition the index across multiple machines for scale and parallel query serving',
            'To avoid all need for replicas',
            'To make indexing unnecessary',
            'To guarantee zero latency for all queries',
          ],
          correctIndex: 0,
          explanation:
            'Large indexes often cannot fit efficiently on one machine. Sharding distributes storage and query work across multiple nodes.',
        },
        {
          id: 'sd-search-9',
          prompt:
            'What is the tradeoff between recall and precision in search?',
          choices: [
            'Higher recall finds more potentially relevant results, while higher precision emphasizes returning the most relevant results',
            'Recall controls indexing speed and precision controls memory only',
            'They are two names for query latency',
            'Precision matters only for autocomplete',
          ],
          correctIndex: 0,
          explanation:
            'Search systems often balance how broadly they match versus how strictly they rank. Too much recall can flood results with weak matches, while too much precision can miss useful results.',
        },
        {
          id: 'sd-search-10',
          prompt:
            'What is the best interview-level way to discuss a search system?',
          choices: [
            'Break it into ingestion, indexing, retrieval, ranking, freshness, and user-facing features like filters or autocomplete',
            'Only say to use a search engine product without describing architecture',
            'Focus only on database schema and ignore query serving',
            'Treat search as identical to simple key-value lookup',
          ],
          correctIndex: 0,
          explanation:
            'A strong answer shows you understand the pipeline from source data to user results. Search is not just storage. It is also retrieval quality, ranking, latency, and freshness.',
        },
      ],
    },
  },
}