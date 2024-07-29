export default function ImageLoader({ src }: { src: string }) {
    const domain = "freelance-corpsec.onrender.com";
    return `https://${domain}/${src}`;
}
