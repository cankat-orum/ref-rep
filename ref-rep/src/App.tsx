import "./App.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth", // optional
    });
  }, []);

  return (
    <>
      <div className="cont">
        <h1>TAGS</h1>
        <div className="cont">
          &lt;pre&gt;&lt;/pre&gt;: Outputs the same text as it's written inside
          the tag. Good for ASCII art and code snippets.
          {/* prettier-ignore */}
          <pre>{`
                                S
                                A
                                LUT
                                M
                                O N
                                D  E
                                DONT
                              JE SUIS
                              LA  LAN
                              G U E  É
                            L O Q U E N
                            TE      QUESA
                          B  O  U  C  H  E
                          O        P A R I S
                        T I R E   ET   TIRERA
                        T O U             JOURS
                      AUX                  A  L
                    LEM                      ANDS   - Apollinaire
        `}</pre>
        </div>
        <div className="cont">
          &lt;mark&gt;&lt;/mark&gt;: marks the <mark>background</mark> of text.
        </div>
        <div className="cont">
          &lt;sub&gt;&lt;/sub&gt;: Displays text slightly below the center line.
          exp: O<sub>2</sub>
        </div>
        <div className="cont">
          &lt;sup&gt;&lt;/sup&gt;: Displays text slightly above the center line.
          exp: a<sup>2</sup>
        </div>
      </div>
      <div className="cont">
        <h1>ATTRIBUTES</h1>
        <div className="cont">
          title: Provides advisory information about the element. This text
          typically appears as a tooltip when the user hovers over the element.
          <br />
          <a href="https://ironlung.com/" title="Visit ironlung.com">
            Iron Lung Out Now! (hover over text)
          </a>
        </div>
        <div className="cont">
          data-*: These attributes allow you to store custom data private to the
          page or application. The data-* attributes are primarily intended for
          use with JavaScript, where they can be easily accessed and
          manipulated. The * can be replaced with any string.
          <pre className="code-block">
            &lt;div data-id=&quot;123&quot;
            data-category=&quot;electronics&quot;&gt; Product information
            &lt;/div&gt;
          </pre>
        </div>
        <div className="cont">
          tabindex: Specifies the order in which elements receive focus when
          navigating with the "Tab" key. A positive value indicates its position
          in the tab order, 0 means it should be part of the default tab order,
          and -1 removes it from the tab order but still allows programmatic
          focus.
          <br />
          <a href="#" tabIndex={2}>
            Second index
          </a>
          <button tabIndex={1}>First index</button>
          <a href="#" tabIndex={3}>
            Third index
          </a>
        </div>
      </div>
      <div className="cont">
        <h1>LISTS</h1>
        <div className="cont">
          &lt;dl&gt;&lt;/dl&gt;: The Description List element: It represents a
          description list. The element encloses a list of groups of terms
          (specified using the dt element) and descriptions (provided by dd
          elements).
          <br />
          <dl>
            <dt>Term</dt>
            <dd>Definition or description</dd>
            <dt>Another Term</dt>
            <dd>Another description</dd>
          </dl>
        </div>
      </div>
    </>
  );
}

export default App;
