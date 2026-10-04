import { ContactFormScreen } from '@/components/forms/ContactFormScreen';
import { siteData } from '@/lib/site-data';

export default function PartnerPage() {
  const spec = siteData.forms.partner;
  return (
    <ContactFormScreen
      kicker={spec.kicker}
      title={spec.title}
      copy={spec.copy}
      defaultInterest={spec.interest}
    />
  );
}
