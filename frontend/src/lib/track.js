import axios from "axios";

const API = process.env.REACT_APP_BACKEND_URL;
const UTM_KEYS = ["utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "ref"];

export function captureUtm(search) {
  try {
    const params = new URLSearchParams(search);
    const utm = {};
    UTM_KEYS.forEach((k) => {
      const v = params.get(k);
      if (v) utm[k] = v;
    });
    if (Object.keys(utm).length) sessionStorage.setItem("nzg_utm", JSON.stringify(utm));
  } catch (e) { /* noop */ }
}

export function getUtm() {
  try {
    return JSON.parse(sessionStorage.getItem("nzg_utm") || "{}");
  } catch (e) {
    return {};
  }
}

export async function track(event, meta = {}) {
  try {
    await axios.post(`${API}/api/track`, {
      event,
      page: window.location.pathname,
      meta: { ...meta, ...getUtm() },
    });
  } catch (e) { /* analytics must never break UX */ }
}
