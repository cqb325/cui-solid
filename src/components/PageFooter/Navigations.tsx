import type { JSXElement } from "solid-js";

export function FooterNavigations (props: any) {
    return <div class="cm-page-footer-navigations">
        {props.children}
    </div>
}

export function FooterNavigation (props: any) {
    return <div class="cm-page-footer-navigation">
        <dl>
            <dt>{props.head}</dt>
            {props.children}
        </dl>
    </div>
}

export interface FooterNavigationLink {
    icon?: JSXElement
    link: string;
    style?: any;
    children?: any;
}

function Link (props: FooterNavigationLink) {
    return <dd class="cm-page-footer-navigation-link">
        <a href={props.link} target="_blank" style={props.style}>{props.icon}{props.children}</a>
    </dd>
}

FooterNavigation.Link = Link;
