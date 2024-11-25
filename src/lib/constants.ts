import BarChart from '@/components/icons/bar_chart'
import Calendar from '@/components/icons/calendar'
import CheckCircle from '@/components/icons/check_circled'
import Chip from '@/components/icons/chip'
import ClipboardIcon from '@/components/icons/clipboardIcon'
import Compass from '@/components/icons/compass'
import Database from '@/components/icons/database'
import Flag from '@/components/icons/flag'
import Headphone from '@/components/icons/headphone'
import Home from '@/components/icons/home'
import Info from '@/components/icons/info'
import LinkIcon from '@/components/icons/link'
import Lock from '@/components/icons/lock'
import Message from '@/components/icons/messages'
import Notification from '@/components/icons/notification'
import Payment from '@/components/icons/payment'
import Person from '@/components/icons/person'
import Pipelines from '@/components/icons/pipelines'
import PluraCategory from '@/components/icons/plura-category'
import Power from '@/components/icons/power'
import Receipt from '@/components/icons/receipt'
import Send from '@/components/icons/send'
import Settings from '@/components/icons/settings'
import Shield from '@/components/icons/shield'
import Star from '@/components/icons/star'
import Tune from '@/components/icons/tune'
import Video from '@/components/icons/video_recorder'
import Wallet from '@/components/icons/wallet'
import Warning from '@/components/icons/warning'
import Stripe from 'stripe'
export const pricingCards = [
  {
    title: 'Starter',
    description: 'Perfect for trying out plura',
    price: 'Free',
    duration: '',
    highlight: 'Key features',
    features: ['3 Sub accounts', '2 Team members', 'Unlimited pipelines'],
    priceId: '',
  },
  {
    title: 'Unlimited Saas',
    description: 'The ultimate agency kit',
    price: '$49',
    duration: 'month',
    highlight: 'Key features',
    features: ['Rebilling', '24/7 Support team'],
    priceId: 'price_1QNCpjDzaQgFnciuFoXRsU4L',
  },
  {
    title: 'Basic',
    description: 'For serious agency owners',
    price: '$19',
    duration: 'month',
    highlight: 'Everything in Starter, plus',
    features: ['Unlimited Sub accounts', 'Unlimited Team members'],
    priceId: 'price_1QNCpjDzaQgFnciuAGEkED6i',
  },
]

export const addOnProducts = [
  { title: 'Priority Support', id: 'prod_RFj6km2l6UbStN' },
]

export const icons = [
  {
    value: 'chart',
    label: 'Bar Chart',
    path: BarChart,
  },
  {
    value: 'headphone',
    label: 'Headphones',
    path: Headphone,
  },
  {
    value: 'send',
    label: 'Send',
    path: Send,
  },
  {
    value: 'pipelines',
    label: 'Pipelines',
    path: Pipelines,
  },
  {
    value: 'calendar',
    label: 'Calendar',
    path: Calendar,
  },
  {
    value: 'settings',
    label: 'Settings',
    path: Settings,
  },
  {
    value: 'check',
    label: 'Check Circled',
    path: CheckCircle,
  },
  {
    value: 'chip',
    label: 'Chip',
    path: Chip,
  },
  {
    value: 'compass',
    label: 'Compass',
    path: Compass,
  },
  {
    value: 'database',
    label: 'Database',
    path: Database,
  },
  {
    value: 'flag',
    label: 'Flag',
    path: Flag,
  },
  {
    value: 'home',
    label: 'Home',
    path: Home,
  },
  {
    value: 'info',
    label: 'Info',
    path: Info,
  },
  {
    value: 'link',
    label: 'Link',
    path: LinkIcon,
  },
  {
    value: 'lock',
    label: 'Lock',
    path: Lock,
  },
  {
    value: 'messages',
    label: 'Messages',
    path: Message,
  },
  {
    value: 'notification',
    label: 'Notification',
    path: Notification,
  },
  {
    value: 'payment',
    label: 'Payment',
    path: Payment,
  },
  {
    value: 'power',
    label: 'Power',
    path: Power,
  },
  {
    value: 'receipt',
    label: 'Receipt',
    path: Receipt,
  },
  {
    value: 'shield',
    label: 'Shield',
    path: Shield,
  },
  {
    value: 'star',
    label: 'Star',
    path: Star,
  },
  {
    value: 'tune',
    label: 'Tune',
    path: Tune,
  },
  {
    value: 'videorecorder',
    label: 'Video Recorder',
    path: Video,
  },
  {
    value: 'wallet',
    label: 'Wallet',
    path: Wallet,
  },
  {
    value: 'warning',
    label: 'Warning',
    path: Warning,
  },
  {
    value: 'person',
    label: 'Person',
    path: Person,
  },
  {
    value: 'category',
    label: 'Category',
    path: PluraCategory,
  },
  {
    value: 'clipboardIcon',
    label: 'Clipboard Icon',
    path: ClipboardIcon,
  },
]

export type EditorBtns =
  | 'text'
  | 'container'
  | 'section'
  | 'contactForm'
  | 'paymentForm'
  | 'link'
  | '2Col'
  | 'video'
  | '__body'
  | 'image'
  | null
  | '3Col'

export const defaultStyles: React.CSSProperties = {
  backgroundPosition: 'center',
  objectFit: 'cover',
  backgroundRepeat: 'no-repeat',
  textAlign: 'left',
  opacity: '100%',
}

export const fake_products: Stripe.Product[] = [
  {
    id: 'prod_1',
    object: 'product',
    active: true,
    created: 1635724800, // Примерная дата создания
    description: 'This is a sample product description.',
    images: ['/assets/products_example/gojo-cat.jpg'],
    livemode: true,
    marketing_features: [{ name: 'Feature 1' }],
    metadata: {},
    name: 'Product 1',
    package_dimensions: {
      height: 10,
      length: 20,
      weight: 8,
      width: 5,
    },
    shippable: true,
    statement_descriptor: 'Sample Product 1',
    tax_code: 'tax_code_123',
    type: 'good',
    unit_label: 'unit',
    updated: 1635811200, // Примерная дата обновления
    url: 'https://example.com/product1',
    default_price: {
      id: 'price_1',
      object: 'price',
      active: true,
      billing_scheme: 'per_unit',
      created: 1635724800,
      currency: 'usd',
      currency_options: {},
      custom_unit_amount: null,
      livemode: true,
      lookup_key: null,
      metadata: {},
      nickname: null,
      product: 'prod_1',
      recurring: null,
      // recurring: {
      //   aggregate_usage: 'sum',
      //   interval: 'month',
      //   interval_count: 1,
      //   meter: null,
      //   trial_period_days: 14,
      //   usage_type: 'licensed',
      // },
      tax_behavior: 'exclusive',
      tiers: [],
      tiers_mode: null,
      transform_quantity: null,
      type: 'one_time',
      unit_amount: 1000, // Цена в центах
      unit_amount_decimal: '1000.00',
    },
  },
  {
    id: 'prod_2',
    object: 'product',
    active: false,
    created: 1635724801,
    description: 'This is another sample product description.',
    images: ['/assets/products_example/peace.jpg'],
    livemode: false,
    marketing_features: [{ name: 'Feature 2' }],
    metadata: {},
    name: 'Product 2',
    package_dimensions: null,
    shippable: false,
    statement_descriptor: 'Sample Product 2',
    tax_code: 'tax_code_456',
    type: 'service',
    unit_label: null,
    updated: 1635811201,
    url: 'https://example.com/product2',
    default_price: {
      id: 'price_2',
      object: 'price',
      active: true,
      billing_scheme: 'per_unit',
      created: 1635724801,
      currency: 'eur',
      currency_options: {},
      custom_unit_amount: null,
      livemode: false,
      lookup_key: null,
      metadata: {},
      nickname: null,
      product: 'prod_2',
      recurring: {
        aggregate_usage: 'last_during_period',
        interval: 'year',
        interval_count: 1,
        meter: 'meter_123',
        trial_period_days: null,
        usage_type: 'metered',
      },
      tax_behavior: 'exclusive',
      tiers: [],
      tiers_mode: null,
      transform_quantity: null,
      type: 'recurring',
      unit_amount: 2000, // Цена в центах
      unit_amount_decimal: '2000.00',
    },
  },
];
