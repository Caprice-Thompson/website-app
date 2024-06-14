import "./FooterLink.css";

export default function FooterLink(props) {
    return (
        <a href={props.href} target="_blank" rel="noreferrer" className="footerLink">
          {props.children}
        </a>
      );
}