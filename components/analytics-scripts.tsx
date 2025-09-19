import { headers } from "next/headers";
import Script from "next/script";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID;
const POSTHOG_KEY = process.env.NEXT_PUBLIC_POSTHOG_KEY;
const POSTHOG_HOST = process.env.NEXT_PUBLIC_POSTHOG_HOST ?? "https://us.i.posthog.com";

export function AnalyticsScripts() {
  const nonce = headers().get("x-torvus-csp-nonce") ?? undefined;

  return (
    <>
      {GA_ID ? (
        <>
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
            strategy="afterInteractive"
            nonce={nonce}
          />
          <Script id="ga-init" strategy="afterInteractive" nonce={nonce}>
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_ID}', { anonymize_ip: true });
            `}
          </Script>
        </>
      ) : null}
      {POSTHOG_KEY ? (
        <Script id="posthog-init" strategy="afterInteractive" nonce={nonce}>
          {`
            (function(p,o,s,t,h){
              if(!p.posthog){
                p.posthog={_i:[],init:function(i,c,r){function l(o){return function(){p.posthog._i.push([o,arguments])}}var _=p.posthog;
                _.people={set:l('people.set')};_.capture=l('capture');_.identify=l('identify');_.alias=l('alias');_.group=l('group');
                _.set=l('set');_.set_once=l('set_once');_.opt_in_capturing=l('opt_in_capturing');_.opt_out_capturing=l('opt_out_capturing');
                _.has_opted_in_capturing=function(){return false};_.has_opted_out_capturing=function(){return false};
                _.onFeatureFlags=l('onFeatureFlags');_.reloadFeatureFlags=l('reloadFeatureFlags');
                _.isFeatureEnabled=function(){return false};_.reset=l('reset');_.pageview=l('pageview');
                _.init(i,c,r);
                if(!document.getElementById('posthog-js')){
                  var d=o.createElement('script');d.type='text/javascript';d.id='posthog-js';d.async=true;d.src=t;
                  var s=o.getElementsByTagName('script')[0];s.parentNode.insertBefore(d,s);
                }
              }
            }})(window,document,'script','${POSTHOG_HOST}/static/array.js');
            window.posthog?.init('${POSTHOG_KEY}', { api_host: '${POSTHOG_HOST}', capture_pageview: false });
            window.posthog?.capture('pageview');
          `}
        </Script>
      ) : null}
    </>
  );
}
