import React, { useState } from 'react';
import styles from './Label.module.css';
import cdelogo from '../assets/cde_logo7.svg';
import cdetitle from '../assets/ColleDegliElimiTitle.svg';
import italianflag from '../assets/ItalianFlag.svg';
import bioagricertlogo from '../assets/bioagricert2.svg';

// Import components for dynamic rendering
import TitleComponent from './Title';
import DescriptionComponent from './Description';
import NutritionalComponent from './Nutritional';
import InfoLogoComponent from './InfoLogo';
import CertificationComponent from './Certification';
import FlagComponent from './Flag';

// Reusable Components
const NutritionalRow = ({ label, value, subLabel, subValue }) => (
  <section className={styles.nutritional_tabel_row}>
    <div className={styles.nutritional_tabel_row_text}>
      {label}
      {subLabel && <div>{subLabel}</div>}
    </div>
    <div className={styles.nutritional_tabel_row_number}>
      {value}
      {subValue && <div>{subValue}</div>}
    </div>
  </section>
);

const Label = () => {
  const [ActiveComponent, setActiveComponent] = useState(() => () => <div>Default Content</div>);

  const handleSectionClick = (Component) => {
    setActiveComponent(() => Component);
  };

  return (
    <div className={styles.super_container_alpha}>
      <section className={styles.label_super_container}>
        {/* Title Section */}
        <section
          className={styles.label_title_container}
          onClick={() => handleSectionClick(TitleComponent)}
        >
          <img src={cdetitle} width={400} alt="cde title" className="cde-title-img" />
        </section>

        {/* Description Section */}
        <section
          className={styles.label_description_container}
          onClick={() => handleSectionClick(DescriptionComponent)}
        >
          <div className={styles.label_description_container_description}>
            <p>
              Olio di oliva di categoria superiore ottenuto direttamente dalle olive e unicamente mediante procedimenti meccanici.
            </p>
            <div className={styles.label_description_container_description_bio}>BIOLOGICO</div>
          </div>
          <div className={styles.label_description_container_qr}>QR</div>
        </section>

        {/* Nutritional Table Section */}
        <section
          className={styles.nutritional_tabel_container}
          onClick={() => handleSectionClick(NutritionalComponent)}
        >
          <h3 className={styles.nutritional_tabel_row_container_title}>
            Dichiarazione Nutrizionale e Valore medi per 100ML
          </h3>
          <section className={styles.nutritional_tabel_row_container}>
            <NutritionalRow label="Energia" value="3404 KJ / 820 KCAL" />
            <NutritionalRow label="Grassi" value="92g" subLabel="Di cui acidi grassi saturi" subValue="13g" />
            <NutritionalRow label="Carboidrati" value="0g" subLabel="Di cui zuccheri" subValue="0g" />
            <NutritionalRow label="Proteine" value="0g" />
            <NutritionalRow label="Sale" value="0g" />
          </section>
        </section>

        {/* Info and Logos Section */}
        <section
          className={styles.info_logo_container}
          onClick={() => handleSectionClick(InfoLogoComponent)}
        >
          <div className={styles.info_logo_container_info}>
            <p className={styles.info_logo_container_info_basirico}>
              Confezionato da Basirico Pietro in Via A Crispo 6 Paceco (TP) ITALY
            </p>
            <p className={styles.info_logo_container_info_bellitti}>
              Azienda Agricola: Bellitti Francesco Via P. Favara 26 91018 Salemi (TP) SICILIA
            </p>
            <p className={styles.info_logo_container_info_conservare}>
              Conservare in luogo asciutto e al riparo dalla luce e da fonte di calore
            </p>
          </div>
          <div className={styles.info_logo_container_logo}>
            <img src={cdelogo} alt="cdelogo" className={styles.info_logo_container_logo_img} />
          </div>
        </section>

        {/* Certification Section */}
        <section
          className={styles.certification_info_container}
          onClick={() => handleSectionClick(CertificationComponent)}
        >
          <div className={styles.certification_info_container_biocert}>
            <img src={bioagricertlogo} alt="bio agricert logo" className={styles.biocert_img} />
          </div>
          <div className={styles.label_certification_info_container_info_container}>
            <div className={styles.label_certification_info_container_userecycle}>
              <div className={styles.label_certification_info_container_userecycle_box_1}>
                Da consumarsi preferibilmente entro il
              </div>
              <div className={styles.label_certification_info_container_userecycle_box_2}>
                Campagna Oleicola
              </div>
              <div className={styles.label_certification_info_container_userecycle_box_3}>
                Lotto
              </div>
              <div className={styles.label_certification_info_container_userecycle_box_4}></div>
            </div>
            <div className={styles.label_certification_info_container_italianolitres}>
              <div className={styles.label_certification_info_container_italianolitre_box_1}>
                ITALIANO
              </div>
              <div className={styles.label_certification_info_container_italianolitre_box_2}>
                5000ML
              </div>
            </div>
          </div>
        </section>

        {/* Flag Section */}
        <section
          className={styles.flag_container}
          onClick={() => handleSectionClick(FlagComponent)}
        >
          <img src={italianflag} width={450} alt="italian flag" className="italian-flag-img" />
        </section>
      </section>

      {/* Showbox Section */}
      <section className={styles.showbox_container}>
        <ActiveComponent />
      </section>
    </div>
  );
};

export default Label;
