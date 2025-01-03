import React from 'react';

const Title = () => {
  const containerStyle = {
    padding: '1rem',
    borderRadius: '8px',
    backgroundColor: '#002F35',
    color: '#99FF00',
    fontFamily: 'Courier New, monospace',
    lineHeight: '1.5',
    textAlign: 'left',
    fontSize: '14px',
  };

  const titleStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '0.5rem',
  };

  const paragraphStyle = {
    fontSize: '16px',
    marginBottom: '1rem',
  };

  const headingStyle = {
    fontSize: '16px',
    marginTop: '1rem',
    fontWeight: 'bold',
    color: '#99FF00',
  };

  const listStyle = {
    fontSize: '16px',
    marginLeft: '2rem',
    lineHeight: '1.8',
  };


  return (
    <div style={containerStyle}>

      <div style={titleStyle}>The Elimi People and Salemi: A Deep Dive into History, Culture, and Influence</div>
      <p style={paragraphStyle}>
        The history of the <strong>Elimi</strong> people, a group of ancient Sicilian settlers, is shrouded in mystery and intrigue. The Elimi were believed to have come to Sicily from the <strong>Eastern Mediterranean</strong>, possibly originating from <strong>Troy</strong> or <strong>Anatolia</strong> (modern-day Turkey). Their migration is said to have occurred around the 12th century BCE, following the fall of the city of Troy.
      </p>

      <p style={paragraphStyle}>
        Historians debate the exact origins of the Elimi, with some suggesting they were part of the Greek diaspora, while others believe they were a unique group blending indigenous Sicilian elements with influences from the eastern Mediterranean. Despite these uncertainties, the Elimi are considered one of the most important cultures in ancient Sicilian history.
      </p>

      <h3 style={headingStyle}>Key Dates and Milestones</h3>
      <ul style={listStyle}>
        <li><strong>1200 BCE:</strong> Arrival of the Elimi people in Sicily after the fall of Troy. They settled in the western part of the island, establishing cities such as <strong>Segesta</strong> and <strong>Erice</strong> (modern-day Monte San Giuliano).</li>
        <li><strong>900 BCE:</strong> Rise of Segesta and Erice as major cultural and political centers in Sicily. The cities flourished under the influence of both indigenous and external Mediterranean cultures.</li>
        <li><strong>500 BCE:</strong> Decline of the Elimi, largely due to Greek expansion in the region. Segesta and Erice faced growing pressure from the powerful Greek colonies, particularly Selinus (modern-day Selinunte).</li>
        <li><strong>409 BCE:</strong> Destruction of Segesta by Greek forces from Selinus and Akragas. Although Segesta was later rebuilt, it never regained its former political and cultural dominance.</li>
        <li><strong>3rd Century BCE:</strong> Roman conquest of Sicily, marking the final phase in the decline of the Elimi civilization. The region eventually became part of the Roman Empire after the Punic Wars.</li>
        <li><strong>9th Century CE:</strong> Arab conquest of Sicily, bringing with it advancements in agricultural practices, including the refinement of olive oil production, which had been introduced by earlier civilizations like the Elimi.</li>
      </ul>

      <p style={paragraphStyle}>
        The **Elimi people** are also credited with introducing the cultivation of olive trees and olive oil production techniques to Sicily, practices that continue to define the region today.
      </p>

      <h3 style={headingStyle}>Salemi and Its Role in Preserving the Elimi Legacy</h3>
      <p style={paragraphStyle}>
        While the Elimi civilization faded after their absorption by the Romans, the town of **Salemi** (located in the heart of Elimi territory) continues to preserve the legacy of this ancient people. Salemi, which traces its founding back to the <strong>7th century BCE</strong>, was an important hub of trade and culture. Over time, the town became a significant center for agriculture and olive oil production.
      </p>

      <p style={paragraphStyle}>
        The Arab period in Sicily (9th century CE) brought new advances in agriculture, which were later adopted by Sicilian farmers. The introduction of advanced irrigation techniques and the refinement of olive oil extraction methods allowed for the flourishing of the Sicilian olive oil industry. The historical influence of the Elimi, and later the Arabs, is evident in the high quality of **Sicilian Extra Virgin Olive Oil (EVOO)**, which remains a major export of the island.
      </p>

      <h3 style={headingStyle}>Olive Oil Production: A Timeless Sicilian Tradition</h3>
      <p style={paragraphStyle}>
        Olive oil has been an essential part of Sicilian culture for thousands of years, and its production techniques have evolved over time. The Elimi people are often credited with introducing olive cultivation to the island, laying the groundwork for a tradition that continues today.
      </p>

      <p style={paragraphStyle}>
        Sicily is home to some of the world’s oldest olive trees, with some groves dating back over 2,000 years. The region is renowned for producing high-quality **extra virgin olive oil**, which is prized for its unique flavor and health benefits. The island’s climate, rich soil, and historical agricultural knowledge all contribute to the production of some of the finest olive oils in the world.
      </p>

      <h3 style={headingStyle}>Historical Sources and Interpretations</h3>
      <ul style={listStyle}>
        <li><strong>Herodotus:</strong> The Greek historian mentions the Elimi in his writings, suggesting that their origins may be tied to the fall of Troy.</li>
        <li><strong>Diodorus Siculus:</strong> A native of Sicily, Diodorus provides valuable accounts of the Elimi’s history, culture, and interactions with other Mediterranean civilizations.</li>
        <li><strong>Thucydides:</strong> His account of the Peloponnesian War provides insight into the conflicts between the Elimi and Greek colonies in the 5th century BCE.</li>
      </ul>

      <h3 style={headingStyle}>Cultural and Archaeological Legacy</h3>
      <p style={paragraphStyle}>
        The archaeological sites of Segesta and Erice stand as testaments to the **Elimi people’s influence on Sicilian architecture**. These cities, along with others in the western part of the island, boast impressive remains of **Doric temples**, **ancient theaters**, and **fortifications**. The **Segesta Temple**, in particular, is one of the most well-preserved ancient Greek structures in the Mediterranean, showcasing the Elimi's adoption of Greek architectural styles.
      </p>

      <p style={paragraphStyle}>
        Despite their decline, the Elimi’s impact on Sicilian culture and history is undeniable. Their agricultural innovations, particularly in the cultivation of olives, helped shape the island’s economy and traditions for millennia.
      </p>

      <p style={paragraphStyle}>
        Today, Salemi continues to honor its Elimi roots through cultural preservation and the promotion of **Sicilian olive oil**. The town hosts annual festivals that celebrate the region’s agricultural heritage, and modern olive oil producers in Salemi and surrounding areas use traditional methods that have been passed down through generations.
      </p>

      <p style={paragraphStyle}>
        The legacy of the Elimi people lives on in the heart of Sicily, in the fields of olive trees, the architecture of ancient cities, and the culture of modern-day Salemi.
      </p>
    </div>
  );
};

export default Title;
