import { Instagram, MessageCircle, ShoppingBag, Globe, Mail, MapPin } from 'lucide-react';
import { LinkItem, SocialLink } from './types';
import logo from './logo_minimalista.png';

export const BRAND_NAME = "Stela Modas";
export const BRAND_TAGLINE = "Elegância em cada detalhe.";
export const PROFILE_IMAGE = logo;

export const LINKS: LinkItem[] = [
  {
    id: 'whatsapp',
    title: 'Atendimento Personalizado',
    subtitle: 'Fale com Stela Modas',
    url: 'https://api.whatsapp.com/send/?phone=558591029937&text=Ol%C3%A1%21+Vim+pelo+seu+site.&type=phone_number&app_absent=0',
    icon: MessageCircle,
  },
  {
    id: 'instagram',
    title: 'Loja Online',
    subtitle: 'Compre com segurança e conforto',
    url: 'https://www.instagram.com/stela_moda_feminina/',
    icon: Globe,
  },
  {
    id: 'instagram',
    title: 'Siga no Instagram',
    subtitle: 'Inspirações diárias e novidades',
    url: 'https://www.instagram.com/stela_moda_feminina/',
    icon: Instagram,
  },
];

export const SOCIALS: SocialLink[] = [
  {
    id: 'watsapp',
    url: 'https://api.whatsapp.com/send/?phone=558591029937&text=Ol%C3%A1%21+Vim+pelo+seu+site.&type=phone_number&app_absent=0',
    icon: MessageCircle,
    label: 'WhatsApp',
  },
  {
    id: 'location',
    url: 'https://www.google.com/maps/search/?api=1&query=R.+Maria+Quintino,+800+-+casa+17+-+Parque+Santa+Maria,+Fortaleza+-+CE,+60811-000',
    icon: MapPin,
    label: 'Localização',
  },
];
