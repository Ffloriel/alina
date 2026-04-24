import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import { type ReactNode, useState } from 'react'
import { Footer } from '../../components/footer'
import { Heading } from '../../components/heading'
import { Input } from '../../components/input'
import { FullHumanLogo } from '../../components/logo'
import { SegmentedControl, SegmentedControlOption } from '../../components/segmented-control'
import { Select } from '../../components/select'
import { SelectionCard, SelectionCardGroup } from '../../components/selection-card'
import { Text } from '../../components/text'
import { GuidePage } from '../support/guide'

const meta = {
  title: 'Examples/Unit Converter',
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta

export default meta

type Story = StoryObj<typeof meta>

type ExampleCategory = 'units' | 'portions' | 'cooking' | 'nutrition' | 'clothing' | 'mattress' | 'appliances'
type UnitMode = 'length' | 'weight' | 'volume' | 'temperature' | 'area' | 'speed'
type PortionUnit = 'ml' | 'l' | 'tsp' | 'tbsp' | 'cup' | 'fl-oz' | 'g' | 'oz'
type PortionIngredient = 'water' | 'milk' | 'flour' | 'sugar' | 'honey'
type CookingMode = 'rice' | 'pasta' | 'oils' | 'ingredients'
type RiceType = 'white' | 'brown' | 'jasmine' | 'basmati' | 'wild' | 'sushi'
type RiceDirection = 'uncooked-to-cooked' | 'cooked-to-uncooked'
type PastaMode = 'dried-to-cooked' | 'fresh-to-cooked' | 'dried-to-fresh'
type OilType = 'olive' | 'vegetable' | 'coconut' | 'canola' | 'sunflower' | 'avocado' | 'sesame' | 'butter'
type OilMeasure = 'ml' | 'g'
type IngredientType = 'flour' | 'bread-flour' | 'cake-flour' | 'whole-wheat' | 'sugar' | 'brown-sugar' | 'powdered-sugar' | 'butter' | 'honey' | 'oats' | 'cocoa' | 'almond-flour'
type IngredientMeasure = 'cup' | 'g' | 'tbsp'
type ClothingType = 'mens-shirts' | 'womens-dresses' | 'shoes'
type SizeRegion = 'eu' | 'us' | 'uk'
type MattressRegion = 'us' | 'eu'
type MattressType = 'twin' | 'full' | 'queen' | 'king' | 'cal-king' | 'single' | 'double' | 'super-king'
type ApplianceType = 'washer' | 'dryer' | 'refrigerator' | 'dishwasher' | 'oven'
type ApplianceSize = 'compact' | 'standard' | 'large'

type UnitDefinition = {
  label: string
  toBase: (value: number) => number
  fromBase: (value: number) => number
}

type PortionUnitDefinition = {
  label: string
  kind: 'volume' | 'weight'
  amount: number
}

type ClothingSizeEntry = Record<SizeRegion, string>

type MattressDefinition = {
  label: string
  cm: string
  inches: string
}

const converterCategories = [
  {
    id: 'units',
    label: 'Units',
    description: 'Length, weight, volume, temperature, area, and speed.',
  },
  {
    id: 'portions',
    label: 'Portions',
    description: 'Kitchen measures with ingredient-aware weight and volume.',
  },
  {
    id: 'cooking',
    label: 'Cooking',
    description: 'Rice, pasta, oils, and common ingredient weight rules.',
  },
  {
    id: 'nutrition',
    label: 'Nutrition',
    description: 'Calories, kilojoules, and quick macro energy checks.',
  },
  {
    id: 'clothing',
    label: 'Clothing',
    description: 'EU, US, and UK sizing for common apparel decisions.',
  },
  {
    id: 'mattress',
    label: 'Mattress',
    description: 'Bed sizes with both centimeter and inch references.',
  },
  {
    id: 'appliances',
    label: 'Appliances',
    description: 'Typical footprint ranges for everyday home equipment.',
  },
] as const satisfies ReadonlyArray<{ id: ExampleCategory; label: string; description: string }>

const makeFactorUnit = (label: string, factor: number): UnitDefinition => ({
  label,
  toBase: (value) => value * factor,
  fromBase: (value) => value / factor,
})

const unitGroups: Record<UnitMode, Record<string, UnitDefinition>> = {
  length: {
    m: makeFactorUnit('Meters', 1),
    km: makeFactorUnit('Kilometers', 1000),
    cm: makeFactorUnit('Centimeters', 0.01),
    mm: makeFactorUnit('Millimeters', 0.001),
    mi: makeFactorUnit('Miles', 1609.344),
    yd: makeFactorUnit('Yards', 0.9144),
    ft: makeFactorUnit('Feet', 0.3048),
    in: makeFactorUnit('Inches', 0.0254),
  },
  weight: {
    kg: makeFactorUnit('Kilograms', 1),
    g: makeFactorUnit('Grams', 0.001),
    mg: makeFactorUnit('Milligrams', 0.000001),
    lb: makeFactorUnit('Pounds', 0.45359237),
    oz: makeFactorUnit('Ounces', 0.028349523125),
    st: makeFactorUnit('Stones', 6.35029318),
  },
  volume: {
    l: makeFactorUnit('Liters', 1),
    ml: makeFactorUnit('Milliliters', 0.001),
    'gal-us': makeFactorUnit('Gallons (US)', 3.785411784),
    'gal-uk': makeFactorUnit('Gallons (UK)', 4.54609),
    qt: makeFactorUnit('Quarts', 0.946352946),
    pt: makeFactorUnit('Pints', 0.473176473),
    cup: makeFactorUnit('Cups', 0.2365882365),
    'fl-oz': makeFactorUnit('Fluid ounces', 0.0295735295625),
  },
  temperature: {
    c: {
      label: 'Celsius',
      toBase: (value) => value,
      fromBase: (value) => value,
    },
    f: {
      label: 'Fahrenheit',
      toBase: (value) => ((value - 32) * 5) / 9,
      fromBase: (value) => (value * 9) / 5 + 32,
    },
    k: {
      label: 'Kelvin',
      toBase: (value) => value - 273.15,
      fromBase: (value) => value + 273.15,
    },
  },
  area: {
    sqm: makeFactorUnit('Square meters', 1),
    sqkm: makeFactorUnit('Square kilometers', 1_000_000),
    ha: makeFactorUnit('Hectares', 10_000),
    acre: makeFactorUnit('Acres', 4046.8564224),
    sqft: makeFactorUnit('Square feet', 0.09290304),
    sqyd: makeFactorUnit('Square yards', 0.83612736),
  },
  speed: {
    'm-s': makeFactorUnit('Meters/second', 1),
    'km-h': makeFactorUnit('Kilometers/hour', 0.2777777778),
    mph: makeFactorUnit('Miles/hour', 0.44704),
    knots: makeFactorUnit('Knots', 0.5144444444),
    'ft-s': makeFactorUnit('Feet/second', 0.3048),
  },
}

const unitDefaults = {
  length: ['m', 'ft'],
  weight: ['kg', 'lb'],
  volume: ['l', 'cup'],
  temperature: ['c', 'f'],
  area: ['sqm', 'sqft'],
  speed: ['km-h', 'mph'],
} as const satisfies Record<UnitMode, readonly [string, string]>

const portionUnits: Record<PortionUnit, PortionUnitDefinition> = {
  ml: { label: 'Milliliters', kind: 'volume', amount: 1 },
  l: { label: 'Liters', kind: 'volume', amount: 1000 },
  tsp: { label: 'Teaspoons', kind: 'volume', amount: 4.92892 },
  tbsp: { label: 'Tablespoons', kind: 'volume', amount: 14.7868 },
  cup: { label: 'Cups', kind: 'volume', amount: 236.588 },
  'fl-oz': { label: 'Fluid ounces', kind: 'volume', amount: 29.5735 },
  g: { label: 'Grams', kind: 'weight', amount: 1 },
  oz: { label: 'Ounces', kind: 'weight', amount: 28.3495 },
}

const portionIngredientProfiles = {
  water: { label: 'Water-based', gramsPerMl: 1, note: 'Useful for soups, stock, and most water-like liquids.' },
  milk: { label: 'Milk', gramsPerMl: 1.03, note: 'A practical approximation for milk and similar dairy liquids.' },
  flour: { label: 'Flour', gramsPerMl: 0.53, note: 'Helps approximate volume-to-weight changes for flour-heavy mixes.' },
  sugar: { label: 'Sugar', gramsPerMl: 0.85, note: 'Granulated sugar packs more densely than flour.' },
  honey: { label: 'Honey', gramsPerMl: 1.42, note: 'Dense sweeteners convert very differently than water.' },
} as const satisfies Record<PortionIngredient, { label: string; gramsPerMl: number; note: string }>

const riceProfiles = {
  white: { label: 'White rice', cookedRatio: 3, waterRatio: 1.8 },
  brown: { label: 'Brown rice', cookedRatio: 2.7, waterRatio: 2.15 },
  jasmine: { label: 'Jasmine rice', cookedRatio: 3.05, waterRatio: 1.7 },
  basmati: { label: 'Basmati rice', cookedRatio: 3, waterRatio: 1.65 },
  wild: { label: 'Wild rice', cookedRatio: 3.5, waterRatio: 2.6 },
  sushi: { label: 'Sushi rice', cookedRatio: 2.8, waterRatio: 1.45 },
} as const satisfies Record<RiceType, { label: string; cookedRatio: number; waterRatio: number }>

const pastaProfiles = {
  'dried-to-cooked': { label: 'Dried to cooked', ratio: 2.25, note: 'Dried pasta roughly doubles to a little more than double once cooked.' },
  'fresh-to-cooked': { label: 'Fresh to cooked', ratio: 1.3, note: 'Fresh pasta gains less weight because it already starts hydrated.' },
  'dried-to-fresh': { label: 'Dried to fresh equivalent', ratio: 1.6, note: 'Useful when comparing recipes that list dried versus fresh pasta.' },
} as const satisfies Record<PastaMode, { label: string; ratio: number; note: string }>

const oilProfiles = {
  olive: { label: 'Olive oil', gramsPerMl: 0.91 },
  vegetable: { label: 'Vegetable oil', gramsPerMl: 0.92 },
  coconut: { label: 'Coconut oil', gramsPerMl: 0.924 },
  canola: { label: 'Canola oil', gramsPerMl: 0.92 },
  sunflower: { label: 'Sunflower oil', gramsPerMl: 0.92 },
  avocado: { label: 'Avocado oil', gramsPerMl: 0.915 },
  sesame: { label: 'Sesame oil', gramsPerMl: 0.92 },
  butter: { label: 'Melted butter', gramsPerMl: 0.959 },
} as const satisfies Record<OilType, { label: string; gramsPerMl: number }>

const ingredientProfiles = {
  flour: { label: 'All-purpose flour', gramsPerCup: 125 },
  'bread-flour': { label: 'Bread flour', gramsPerCup: 130 },
  'cake-flour': { label: 'Cake flour', gramsPerCup: 115 },
  'whole-wheat': { label: 'Whole wheat flour', gramsPerCup: 120 },
  sugar: { label: 'Granulated sugar', gramsPerCup: 200 },
  'brown-sugar': { label: 'Brown sugar', gramsPerCup: 220 },
  'powdered-sugar': { label: 'Powdered sugar', gramsPerCup: 120 },
  butter: { label: 'Butter', gramsPerCup: 227 },
  honey: { label: 'Honey', gramsPerCup: 340 },
  oats: { label: 'Rolled oats', gramsPerCup: 90 },
  cocoa: { label: 'Cocoa powder', gramsPerCup: 85 },
  'almond-flour': { label: 'Almond flour', gramsPerCup: 112 },
} as const satisfies Record<IngredientType, { label: string; gramsPerCup: number }>

const clothingTables: Record<ClothingType, ReadonlyArray<ClothingSizeEntry>> = {
  'mens-shirts': [
    { eu: '46', us: '36', uk: '36' },
    { eu: '48', us: '38', uk: '38' },
    { eu: '50', us: '40', uk: '40' },
    { eu: '52', us: '42', uk: '42' },
    { eu: '54', us: '44', uk: '44' },
    { eu: '56', us: '46', uk: '46' },
  ],
  'womens-dresses': [
    { eu: '34', us: '4', uk: '6' },
    { eu: '36', us: '6', uk: '8' },
    { eu: '38', us: '8', uk: '10' },
    { eu: '40', us: '10', uk: '12' },
    { eu: '42', us: '12', uk: '14' },
    { eu: '44', us: '14', uk: '16' },
    { eu: '46', us: '16', uk: '18' },
  ],
  shoes: [
    { eu: '39', us: '7', uk: '6' },
    { eu: '40', us: '8', uk: '7' },
    { eu: '41', us: '8.5', uk: '7.5' },
    { eu: '42', us: '9', uk: '8' },
    { eu: '43', us: '10', uk: '9' },
    { eu: '44', us: '11', uk: '10' },
    { eu: '45', us: '12', uk: '11' },
    { eu: '46', us: '13', uk: '12' },
  ],
}

const clothingLabels = {
  'mens-shirts': "Men's shirts",
  'womens-dresses': "Women's dresses",
  shoes: 'Shoes',
} as const satisfies Record<ClothingType, string>

const mattressGuides: Record<MattressRegion, Partial<Record<MattressType, MattressDefinition>>> = {
  us: {
    twin: { label: 'Twin', cm: '97 × 191 cm', inches: '38 × 75 in' },
    full: { label: 'Full / double', cm: '137 × 191 cm', inches: '54 × 75 in' },
    queen: { label: 'Queen', cm: '152 × 203 cm', inches: '60 × 80 in' },
    king: { label: 'King', cm: '193 × 203 cm', inches: '76 × 80 in' },
    'cal-king': { label: 'California king', cm: '183 × 213 cm', inches: '72 × 84 in' },
  },
  eu: {
    single: { label: 'Single', cm: '90 × 200 cm', inches: '35 × 79 in' },
    double: { label: 'Double', cm: '140 × 200 cm', inches: '55 × 79 in' },
    queen: { label: 'Queen', cm: '160 × 200 cm', inches: '63 × 79 in' },
    king: { label: 'King', cm: '180 × 200 cm', inches: '71 × 79 in' },
    'super-king': { label: 'Super king', cm: '200 × 200 cm', inches: '79 × 79 in' },
  },
}

const applianceGuides = {
  washer: {
    compact: { label: 'Compact', width: '60 cm', height: '85 cm', depth: '45 cm', capacity: '7 kg' },
    standard: { label: 'Standard', width: '60 cm', height: '85 cm', depth: '56 cm', capacity: '8 to 9 kg' },
    large: { label: 'Large', width: '60 cm', height: '85 cm', depth: '65 cm', capacity: '10 to 12 kg' },
  },
  dryer: {
    compact: { label: 'Compact', width: '60 cm', height: '84 cm', depth: '46 cm', capacity: '7 kg' },
    standard: { label: 'Standard', width: '60 cm', height: '85 cm', depth: '60 cm', capacity: '8 to 9 kg' },
    large: { label: 'Large', width: '60 cm', height: '85 cm', depth: '66 cm', capacity: '10 kg' },
  },
  refrigerator: {
    compact: { label: 'Compact', width: '55 cm', height: '85 cm', depth: '58 cm', capacity: '120 to 150 L' },
    standard: { label: 'Standard', width: '70 cm', height: '180 cm', depth: '70 cm', capacity: '300 to 380 L' },
    large: { label: 'Large', width: '91 cm', height: '178 cm', depth: '74 cm', capacity: '500 to 650 L' },
  },
  dishwasher: {
    compact: { label: 'Compact', width: '45 cm', height: '82 cm', depth: '57 cm', capacity: '9 place settings' },
    standard: { label: 'Standard', width: '60 cm', height: '82 cm', depth: '57 cm', capacity: '13 place settings' },
    large: { label: 'Large', width: '60 cm', height: '85 cm', depth: '60 cm', capacity: '15 place settings' },
  },
  oven: {
    compact: { label: 'Compact', width: '60 cm', height: '45 cm', depth: '55 cm', capacity: '45 L' },
    standard: { label: 'Standard', width: '60 cm', height: '60 cm', depth: '56 cm', capacity: '65 L' },
    large: { label: 'Large', width: '90 cm', height: '60 cm', depth: '60 cm', capacity: '110 L' },
  },
} as const satisfies Record<ApplianceType, Record<ApplianceSize, { label: string; width: string; height: string; depth: string; capacity: string }>>

function parseNumber(value: string) {
  const parsed = Number(value)
  return Number.isFinite(parsed) ? parsed : null
}

function formatNumber(value: number, maximumFractionDigits = 4) {
  const absoluteValue = Math.abs(value)
  const fractionDigits = absoluteValue >= 100 ? 2 : absoluteValue >= 10 ? 3 : maximumFractionDigits

  return new Intl.NumberFormat('en-US', {
    maximumFractionDigits: fractionDigits,
  }).format(value)
}

function convertUnits(mode: UnitMode, value: number | null, from: string, to: string) {
  if (value === null) return null

  const group = unitGroups[mode]
  const fromUnit = group[from]
  const toUnit = group[to]

  if (!fromUnit || !toUnit) return null

  return toUnit.fromBase(fromUnit.toBase(value))
}

function convertPortion(value: number | null, from: PortionUnit, to: PortionUnit, gramsPerMl: number) {
  if (value === null) return null

  const fromUnit = portionUnits[from]
  const toUnit = portionUnits[to]

  if (!fromUnit || !toUnit) return null

  const volumeInMl =
    fromUnit.kind === 'volume' ? value * fromUnit.amount : (value * fromUnit.amount) / gramsPerMl

  return toUnit.kind === 'volume' ? volumeInMl / toUnit.amount : (volumeInMl * gramsPerMl) / toUnit.amount
}

function formatNullableResult(value: number | null, unitLabel: string) {
  return value === null ? '—' : `${formatNumber(value)} ${unitLabel}`
}

function SwapButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex size-11 items-center justify-center self-center rounded-full border border-zinc-950/10 bg-white/80 text-zinc-500 transition-colors hover:bg-zinc-50 hover:text-zinc-950 dark:border-white/10 dark:bg-zinc-950/72 dark:text-zinc-300 dark:hover:bg-white/8 dark:hover:text-white"
      aria-label="Swap values"
      title="Swap"
    >
      <svg viewBox="0 0 20 20" aria-hidden="true" className="size-5 stroke-current" fill="none">
        <path d="M3.5 6.75h10.75m0 0L11.75 4.25m2.5 2.5-2.5 2.5M16.5 13.25H5.75m0 0 2.5 2.5m-2.5-2.5 2.5-2.5" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}

function FieldLabel({ label, children }: { label: string; children: ReactNode }) {
  return (
    <label className="block space-y-2">
      <span className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500 dark:text-zinc-400">{label}</span>
      {children}
    </label>
  )
}

function ResultCard({
  label,
  value,
  hint,
}: {
  label: string
  value: string
  hint?: string
}) {
  return (
    <div className="rounded-2xl border border-zinc-950/10 bg-[linear-gradient(180deg,rgba(238,242,218,0.82),rgba(255,255,255,0.96))] p-5 shadow-[0_20px_45px_-34px_rgba(90,106,46,0.45)] dark:border-[#9cab56] dark:bg-[linear-gradient(180deg,rgba(185,200,111,0.18),rgba(24,24,27,0.98))]">
      <p className="text-xs font-light uppercase tracking-[0.16em] text-[#5a6a2e] dark:text-[#c4d38c]">{label}</p>
      <p className="mt-3 text-3xl font-extralight tracking-tight text-[#334019] dark:text-white">{value}</p>
      {hint ? <p className="mt-3 text-sm/6 text-[#4f5f24] dark:text-zinc-300">{hint}</p> : null}
    </div>
  )
}

function UnitConverterExamplePage() {
  const [activeCategory, setActiveCategory] = useState<ExampleCategory>('units')

  const [unitMode, setUnitMode] = useState<UnitMode>('length')
  const [unitFrom, setUnitFrom] = useState<string>(unitDefaults.length[0])
  const [unitTo, setUnitTo] = useState<string>(unitDefaults.length[1])
  const [unitValue, setUnitValue] = useState('1')

  const [portionIngredient, setPortionIngredient] = useState<PortionIngredient>('water')
  const [portionFrom, setPortionFrom] = useState<PortionUnit>('cup')
  const [portionTo, setPortionTo] = useState<PortionUnit>('g')
  const [portionValue, setPortionValue] = useState('1')

  const [cookingMode, setCookingMode] = useState<CookingMode>('rice')
  const [riceType, setRiceType] = useState<RiceType>('white')
  const [riceDirection, setRiceDirection] = useState<RiceDirection>('uncooked-to-cooked')
  const [riceAmount, setRiceAmount] = useState('100')
  const [pastaMode, setPastaMode] = useState<PastaMode>('dried-to-cooked')
  const [pastaAmount, setPastaAmount] = useState('100')
  const [oilType, setOilType] = useState<OilType>('olive')
  const [oilFrom, setOilFrom] = useState<OilMeasure>('ml')
  const [oilAmount, setOilAmount] = useState('60')
  const [ingredientType, setIngredientType] = useState<IngredientType>('flour')
  const [ingredientFrom, setIngredientFrom] = useState<IngredientMeasure>('cup')
  const [ingredientAmount, setIngredientAmount] = useState('2')

  const [nutritionCalories, setNutritionCalories] = useState('250')
  const [proteinGrams, setProteinGrams] = useState('20')
  const [carbGrams, setCarbGrams] = useState('28')
  const [fatGrams, setFatGrams] = useState('9')

  const [clothingType, setClothingType] = useState<ClothingType>('mens-shirts')
  const [clothingFromRegion, setClothingFromRegion] = useState<SizeRegion>('eu')
  const [clothingToRegion, setClothingToRegion] = useState<SizeRegion>('us')
  const [clothingSize, setClothingSize] = useState<string>(clothingTables['mens-shirts'][1].eu)

  const [mattressRegion, setMattressRegion] = useState<MattressRegion>('us')
  const [mattressType, setMattressType] = useState<MattressType>('queen')

  const [applianceType, setApplianceType] = useState<ApplianceType>('washer')
  const [applianceSize, setApplianceSize] = useState<ApplianceSize>('standard')

  const unitAmount = parseNumber(unitValue)
  const unitResult = convertUnits(unitMode, unitAmount, unitFrom, unitTo)
  const activeUnitGroup = unitGroups[unitMode]
  const activeFromUnit = activeUnitGroup[unitFrom]
  const activeToUnit = activeUnitGroup[unitTo]

  const portionAmount = parseNumber(portionValue)
  const portionProfile = portionIngredientProfiles[portionIngredient]
  const portionResult = convertPortion(portionAmount, portionFrom, portionTo, portionProfile.gramsPerMl)

  const riceProfile = riceProfiles[riceType]
  const riceParsedAmount = parseNumber(riceAmount)
  const riceUncookedAmount =
    riceParsedAmount === null
      ? null
      : riceDirection === 'uncooked-to-cooked'
        ? riceParsedAmount
        : riceParsedAmount / riceProfile.cookedRatio
  const riceCookedAmount =
    riceParsedAmount === null
      ? null
      : riceDirection === 'uncooked-to-cooked'
        ? riceParsedAmount * riceProfile.cookedRatio
        : riceParsedAmount
  const riceWaterAmount = riceUncookedAmount === null ? null : riceUncookedAmount * riceProfile.waterRatio

  const pastaProfile = pastaProfiles[pastaMode]
  const pastaParsedAmount = parseNumber(pastaAmount)
  const pastaResult = pastaParsedAmount === null ? null : pastaParsedAmount * pastaProfile.ratio

  const oilProfile = oilProfiles[oilType]
  const oilParsedAmount = parseNumber(oilAmount)
  const oilResult =
    oilParsedAmount === null
      ? null
      : oilFrom === 'ml'
        ? oilParsedAmount * oilProfile.gramsPerMl
        : oilParsedAmount / oilProfile.gramsPerMl

  const selectedIngredient = ingredientProfiles[ingredientType]
  const ingredientParsedAmount = parseNumber(ingredientAmount)
  const ingredientCups =
    ingredientParsedAmount === null
      ? null
      : ingredientFrom === 'cup'
        ? ingredientParsedAmount
        : ingredientFrom === 'tbsp'
          ? ingredientParsedAmount / 16
          : ingredientParsedAmount / selectedIngredient.gramsPerCup
  const ingredientGrams = ingredientCups === null ? null : ingredientCups * selectedIngredient.gramsPerCup
  const ingredientTablespoons = ingredientCups === null ? null : ingredientCups * 16

  const calorieAmount = parseNumber(nutritionCalories)
  const kilojoules = calorieAmount === null ? null : calorieAmount * 4.184
  const proteinAmount = parseNumber(proteinGrams)
  const carbAmount = parseNumber(carbGrams)
  const fatAmount = parseNumber(fatGrams)
  const macroCalories =
    proteinAmount === null || carbAmount === null || fatAmount === null ? null : proteinAmount * 4 + carbAmount * 4 + fatAmount * 9

  const selectedClothingTable = clothingTables[clothingType]
  const selectedClothingEntry = selectedClothingTable.find((entry) => entry[clothingFromRegion] === clothingSize) ?? selectedClothingTable[0]
  const convertedClothingSize = selectedClothingEntry[clothingToRegion]

  const availableMattressGuide = mattressGuides[mattressRegion]
  const mattressOptions = Object.entries(availableMattressGuide) as Array<[MattressType, MattressDefinition]>
  const selectedMattress = availableMattressGuide[mattressType] ?? mattressOptions[0]?.[1] ?? { label: '—', cm: '—', inches: '—' }

  const selectedAppliance = applianceGuides[applianceType][applianceSize]

  const handleUnitModeChange = (mode: UnitMode) => {
    setUnitMode(mode)
    setUnitFrom(unitDefaults[mode][0])
    setUnitTo(unitDefaults[mode][1])
  }

  const handleClothingTypeChange = (type: ClothingType) => {
    setClothingType(type)
    setClothingSize(clothingTables[type][0][clothingFromRegion])
  }

  const handleClothingFromRegionChange = (region: SizeRegion) => {
    setClothingFromRegion(region)
    setClothingSize(clothingTables[clothingType][0][region])
  }

  const handleMattressRegionChange = (region: MattressRegion) => {
    setMattressRegion(region)
    const firstOption = Object.keys(mattressGuides[region])[0] as MattressType
    setMattressType(firstOption)
  }

  return (
    <GuidePage mobileBleed>
      <section className="space-y-8 px-4 pt-4 sm:px-6 sm:pt-6 lg:px-8 lg:pt-8 lg:space-y-10">
        <header className="border-b border-zinc-950/10 pb-6 dark:border-white/10">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <FullHumanLogo className="h-9 w-auto text-zinc-950 dark:text-white" />
              <div>
                <p className="text-xs font-light uppercase tracking-[0.2em] text-zinc-500 dark:text-zinc-400">Full Human Tools</p>
                <h1 className="mt-1 font-sans text-4xl font-extralight tracking-tight text-zinc-950 sm:text-5xl dark:text-white">
                  Unit Converter
                </h1>
              </div>
            </div>
            <Text className="max-w-2xl text-base/7 text-zinc-600 dark:text-zinc-300">
              Convert measurements, kitchen amounts, clothing sizes, mattress dimensions, and appliance footprints.
            </Text>
          </div>
        </header>

        <div id="converter" className="space-y-8 lg:space-y-10">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-light uppercase tracking-[0.18em] text-zinc-500">Choose a category</p>
            <Heading level={2} className="text-4xl font-extralight tracking-tight text-zinc-950 dark:text-white">
              Convert measurements, kitchen amounts, and sizes.
            </Heading>
            <Text className="text-base/7 text-zinc-600 dark:text-zinc-300">
              Pick the calculator you need and the controls below will adapt for units, cooking, nutrition, clothing, mattresses, and appliances.
            </Text>
          </div>

          <SelectionCardGroup
            value={activeCategory}
            onChange={(value) => setActiveCategory(value as ExampleCategory)}
            className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4 2xl:grid-cols-7"
          >
            {converterCategories.map((category) => (
              <SelectionCard
                key={category.id}
                value={category.id}
                description={category.description}
                title={category.label}
              />
            ))}
          </SelectionCardGroup>

          <div className="rounded-3xl border border-zinc-950/10 bg-white/80 p-5 shadow-[0_30px_80px_-52px_rgba(23,23,23,0.2)] dark:border-white/10 dark:bg-zinc-950/72 dark:shadow-[0_30px_80px_-52px_rgba(0,0,0,0.62)] lg:p-8">
            {activeCategory === 'units' ? (
              <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Units</p>
                <Heading level={3} className="text-3xl font-extralight tracking-tight text-zinc-950 dark:text-white">
                  Unit conversion
                </Heading>
                <Text className="text-base/7 text-zinc-600 dark:text-zinc-300">
                  Convert length, weight, volume, temperature, area, and speed with the same simple workflow.
                </Text>
              </div>

              <SegmentedControl value={unitMode} onChange={(value) => handleUnitModeChange(value as UnitMode)} className="flex flex-wrap gap-2">
                {(Object.keys(unitGroups) as UnitMode[]).map((mode) => (
                  <SegmentedControlOption key={mode} value={mode}>
                    {mode[0].toUpperCase() + mode.slice(1)}
                  </SegmentedControlOption>
                ))}
              </SegmentedControl>

              <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
                <div className="space-y-4">
                  <FieldLabel label="From">
                    <Select value={unitFrom} onChange={(event) => setUnitFrom(event.target.value)}>
                      {Object.entries(activeUnitGroup).map(([value, definition]) => (
                        <option key={value} value={value}>
                          {definition.label}
                        </option>
                      ))}
                    </Select>
                  </FieldLabel>
                  <FieldLabel label="Value">
                    <Input type="number" value={unitValue} onChange={(event) => setUnitValue(event.target.value)} placeholder="Enter value" />
                  </FieldLabel>
                </div>

                <SwapButton
                  onClick={() => {
                    setUnitFrom(unitTo)
                    setUnitTo(unitFrom)
                  }}
                />

                <div className="space-y-4">
                  <FieldLabel label="To">
                    <Select value={unitTo} onChange={(event) => setUnitTo(event.target.value)}>
                      {Object.entries(activeUnitGroup).map(([value, definition]) => (
                        <option key={value} value={value}>
                          {definition.label}
                        </option>
                      ))}
                    </Select>
                  </FieldLabel>
                  <ResultCard
                    label="Result"
                    value={activeToUnit ? formatNullableResult(unitResult, activeToUnit.label) : '—'}
                    hint={unitAmount === null ? 'Enter a numeric value to see the converted result.' : `Converted from ${activeFromUnit?.label ?? 'the selected unit'}.`}
                  />
                </div>
              </div>
              </div>
            ) : null}

            {activeCategory === 'portions' ? (
              <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Portions</p>
                <Heading level={3} className="text-3xl font-extralight tracking-tight text-zinc-950 dark:text-white">
                  Portion conversion
                </Heading>
                <Text className="text-base/7 text-zinc-600 dark:text-zinc-300">
                  Switch between household measures and kitchen weights with ingredient-aware conversions.
                </Text>
              </div>

              <div className="grid gap-4 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)]">
                <div className="space-y-4 rounded-2xl border border-zinc-950/10 bg-zinc-50/70 p-5 dark:border-white/10 dark:bg-white/5">
                  <FieldLabel label="Ingredient profile">
                    <Select value={portionIngredient} onChange={(event) => setPortionIngredient(event.target.value as PortionIngredient)}>
                      {Object.entries(portionIngredientProfiles).map(([value, profile]) => (
                        <option key={value} value={value}>
                          {profile.label}
                        </option>
                      ))}
                    </Select>
                  </FieldLabel>
                  <Text className="text-sm/6 text-zinc-600 dark:text-zinc-300">{portionProfile.note}</Text>
                </div>

                <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
                  <div className="space-y-4">
                    <FieldLabel label="From">
                      <Select value={portionFrom} onChange={(event) => setPortionFrom(event.target.value as PortionUnit)}>
                        {Object.entries(portionUnits).map(([value, definition]) => (
                          <option key={value} value={value}>
                            {definition.label}
                          </option>
                        ))}
                      </Select>
                    </FieldLabel>
                    <FieldLabel label="Value">
                      <Input type="number" value={portionValue} onChange={(event) => setPortionValue(event.target.value)} placeholder="Enter value" />
                    </FieldLabel>
                  </div>

                  <SwapButton
                    onClick={() => {
                      setPortionFrom(portionTo)
                      setPortionTo(portionFrom)
                    }}
                  />

                  <div className="space-y-4">
                    <FieldLabel label="To">
                      <Select value={portionTo} onChange={(event) => setPortionTo(event.target.value as PortionUnit)}>
                        {Object.entries(portionUnits).map(([value, definition]) => (
                          <option key={value} value={value}>
                            {definition.label}
                          </option>
                        ))}
                      </Select>
                    </FieldLabel>
                    <ResultCard
                      label="Result"
                      value={
                        portionResult === null ? '—' : `${formatNumber(portionResult)} ${portionUnits[portionTo].label}`
                      }
                      hint="Weight conversions use the selected ingredient profile, so cups and grams remain grounded in the thing you are actually measuring."
                    />
                  </div>
                </div>
              </div>
              </div>
            ) : null}

          {activeCategory === 'cooking' ? (
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Cooking</p>
                <Heading level={3} className="text-3xl font-extralight tracking-tight text-zinc-950 dark:text-white">
                  Cooking conversions
                </Heading>
                <Text className="text-base/7 text-zinc-600 dark:text-zinc-300">
                  Use practical cooking ratios for rice, pasta, oils, and common baking ingredients.
                </Text>
              </div>

              <SegmentedControl value={cookingMode} onChange={(value) => setCookingMode(value as CookingMode)} className="flex flex-wrap gap-2">
                <SegmentedControlOption value="rice">Rice</SegmentedControlOption>
                <SegmentedControlOption value="pasta">Pasta</SegmentedControlOption>
                <SegmentedControlOption value="oils">Oils</SegmentedControlOption>
                <SegmentedControlOption value="ingredients">Ingredients</SegmentedControlOption>
              </SegmentedControl>

              {cookingMode === 'rice' ? (
                <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_20rem]">
                  <div className="grid gap-4 md:grid-cols-2">
                    <FieldLabel label="Rice type">
                      <Select value={riceType} onChange={(event) => setRiceType(event.target.value as RiceType)}>
                        {Object.entries(riceProfiles).map(([value, profile]) => (
                          <option key={value} value={value}>
                            {profile.label}
                          </option>
                        ))}
                      </Select>
                    </FieldLabel>
                    <FieldLabel label="Direction">
                      <Select value={riceDirection} onChange={(event) => setRiceDirection(event.target.value as RiceDirection)}>
                        <option value="uncooked-to-cooked">Uncooked → Cooked</option>
                        <option value="cooked-to-uncooked">Cooked → Uncooked</option>
                      </Select>
                    </FieldLabel>
                    <FieldLabel label={riceDirection === 'uncooked-to-cooked' ? 'Uncooked rice (g)' : 'Cooked rice (g)'}>
                      <Input type="number" value={riceAmount} onChange={(event) => setRiceAmount(event.target.value)} placeholder="Enter amount" />
                    </FieldLabel>
                  </div>

                  <div className="space-y-4">
                    <ResultCard
                      label={riceDirection === 'uncooked-to-cooked' ? 'Cooked rice' : 'Uncooked rice'}
                      value={riceDirection === 'uncooked-to-cooked' ? formatNullableResult(riceCookedAmount, 'g') : formatNullableResult(riceUncookedAmount, 'g')}
                      hint={`${riceProfile.label} uses a cooked-weight ratio of roughly ${riceProfile.cookedRatio.toFixed(2)}×.`}
                    />
                    <ResultCard label="Recommended water" value={formatNullableResult(riceWaterAmount, 'ml')} hint="Water is estimated from the uncooked amount so the guidance stays practical in both directions." />
                  </div>
                </div>
              ) : null}

              {cookingMode === 'pasta' ? (
                <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_20rem]">
                  <div className="grid gap-4 md:grid-cols-2">
                    <FieldLabel label="Conversion type">
                      <Select value={pastaMode} onChange={(event) => setPastaMode(event.target.value as PastaMode)}>
                        {Object.entries(pastaProfiles).map(([value, profile]) => (
                          <option key={value} value={value}>
                            {profile.label}
                          </option>
                        ))}
                      </Select>
                    </FieldLabel>
                    <FieldLabel label="Input amount (g)">
                      <Input type="number" value={pastaAmount} onChange={(event) => setPastaAmount(event.target.value)} placeholder="Enter amount" />
                    </FieldLabel>
                  </div>
                  <ResultCard label="Converted amount" value={formatNullableResult(pastaResult, 'g')} hint={pastaProfile.note} />
                </div>
              ) : null}

              {cookingMode === 'oils' ? (
                <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_20rem]">
                  <div className="grid gap-4 md:grid-cols-3">
                    <FieldLabel label="Oil type">
                      <Select value={oilType} onChange={(event) => setOilType(event.target.value as OilType)}>
                        {Object.entries(oilProfiles).map(([value, profile]) => (
                          <option key={value} value={value}>
                            {profile.label}
                          </option>
                        ))}
                      </Select>
                    </FieldLabel>
                    <FieldLabel label="Convert from">
                      <Select value={oilFrom} onChange={(event) => setOilFrom(event.target.value as OilMeasure)}>
                        <option value="ml">Milliliters</option>
                        <option value="g">Grams</option>
                      </Select>
                    </FieldLabel>
                    <FieldLabel label="Amount">
                      <Input type="number" value={oilAmount} onChange={(event) => setOilAmount(event.target.value)} placeholder="Enter amount" />
                    </FieldLabel>
                  </div>
                  <ResultCard
                    label={oilFrom === 'ml' ? 'Weight' : 'Volume'}
                    value={oilResult === null ? '—' : `${formatNumber(oilResult)} ${oilFrom === 'ml' ? 'g' : 'ml'}`}
                    hint={`${oilProfiles[oilType].label} uses an estimated density of ${oilProfiles[oilType].gramsPerMl.toFixed(3)} g/ml.`}
                  />
                </div>
              ) : null}

              {cookingMode === 'ingredients' ? (
                <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_20rem]">
                  <div className="grid gap-4 md:grid-cols-3">
                    <FieldLabel label="Ingredient">
                      <Select value={ingredientType} onChange={(event) => setIngredientType(event.target.value as IngredientType)}>
                        {Object.entries(ingredientProfiles).map(([value, profile]) => (
                          <option key={value} value={value}>
                            {profile.label}
                          </option>
                        ))}
                      </Select>
                    </FieldLabel>
                    <FieldLabel label="Input measure">
                      <Select value={ingredientFrom} onChange={(event) => setIngredientFrom(event.target.value as IngredientMeasure)}>
                        <option value="cup">Cups</option>
                        <option value="tbsp">Tablespoons</option>
                        <option value="g">Grams</option>
                      </Select>
                    </FieldLabel>
                    <FieldLabel label="Amount">
                      <Input type="number" value={ingredientAmount} onChange={(event) => setIngredientAmount(event.target.value)} placeholder="Enter amount" />
                    </FieldLabel>
                  </div>
                  <div className="grid gap-4 md:grid-cols-2">
                    <ResultCard label="Grams" value={formatNullableResult(ingredientGrams, 'g')} hint={`One cup of ${selectedIngredient.label.toLowerCase()} is approximated at ${selectedIngredient.gramsPerCup} g.`} />
                    <ResultCard label="Tablespoons" value={formatNullableResult(ingredientTablespoons, 'tbsp')} hint="This keeps quick baking adjustments visible without switching contexts." />
                  </div>
                </div>
              ) : null}
            </div>
          ) : null}

          {activeCategory === 'nutrition' ? (
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Nutrition</p>
                <Heading level={3} className="text-3xl font-extralight tracking-tight text-zinc-950 dark:text-white">
                  Nutrition units
                </Heading>
                <Text className="text-base/7 text-zinc-600 dark:text-zinc-300">
                  Convert calories to kilojoules and estimate macro-based energy totals in seconds.
                </Text>
              </div>

              <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
                <div className="space-y-4 rounded-2xl border border-zinc-950/10 bg-zinc-50/70 p-5 dark:border-white/10 dark:bg-white/5">
                  <Heading level={4} className="text-2xl font-extralight tracking-tight text-zinc-950 dark:text-white">
                    Calories to kilojoules
                  </Heading>
                  <FieldLabel label="Calories (kcal)">
                    <Input type="number" value={nutritionCalories} onChange={(event) => setNutritionCalories(event.target.value)} placeholder="Enter calories" />
                  </FieldLabel>
                  <ResultCard label="Kilojoules" value={kilojoules === null ? '—' : `${formatNumber(kilojoules)} kJ`} hint="Calculated with the standard 1 kcal = 4.184 kJ conversion." />
                </div>

                <div className="space-y-4 rounded-2xl border border-zinc-950/10 bg-zinc-50/70 p-5 dark:border-white/10 dark:bg-white/5">
                  <Heading level={4} className="text-2xl font-extralight tracking-tight text-zinc-950 dark:text-white">
                    Macro energy estimate
                  </Heading>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <FieldLabel label="Protein (g)">
                      <Input type="number" value={proteinGrams} onChange={(event) => setProteinGrams(event.target.value)} />
                    </FieldLabel>
                    <FieldLabel label="Carbs (g)">
                      <Input type="number" value={carbGrams} onChange={(event) => setCarbGrams(event.target.value)} />
                    </FieldLabel>
                    <FieldLabel label="Fat (g)">
                      <Input type="number" value={fatGrams} onChange={(event) => setFatGrams(event.target.value)} />
                    </FieldLabel>
                  </div>
                  <ResultCard label="Estimated calories" value={macroCalories === null ? '—' : `${formatNumber(macroCalories)} kcal`} hint="Estimated using 4 kcal/g for protein and carbs, and 9 kcal/g for fat." />
                </div>
              </div>
            </div>
          ) : null}

          {activeCategory === 'clothing' ? (
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Clothing</p>
                <Heading level={3} className="text-3xl font-extralight tracking-tight text-zinc-950 dark:text-white">
                  Clothing size converter
                </Heading>
                <Text className="text-base/7 text-zinc-600 dark:text-zinc-300">
                  Compare common EU, US, and UK sizes without opening multiple charts.
                </Text>
              </div>

              <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_20rem]">
                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                  <FieldLabel label="Clothing type">
                    <Select value={clothingType} onChange={(event) => handleClothingTypeChange(event.target.value as ClothingType)}>
                      {Object.entries(clothingLabels).map(([value, label]) => (
                        <option key={value} value={value}>
                          {label}
                        </option>
                      ))}
                    </Select>
                  </FieldLabel>
                  <FieldLabel label="From region">
                    <Select value={clothingFromRegion} onChange={(event) => handleClothingFromRegionChange(event.target.value as SizeRegion)}>
                      <option value="eu">EU</option>
                      <option value="us">US</option>
                      <option value="uk">UK</option>
                    </Select>
                  </FieldLabel>
                  <FieldLabel label="Size">
                    <Select value={clothingSize} onChange={(event) => setClothingSize(event.target.value)}>
                      {selectedClothingTable.map((entry) => (
                        <option key={`${clothingType}-${entry.eu}-${entry.us}-${entry.uk}`} value={entry[clothingFromRegion]}>
                          {entry[clothingFromRegion]}
                        </option>
                      ))}
                    </Select>
                  </FieldLabel>
                  <FieldLabel label="To region">
                    <Select value={clothingToRegion} onChange={(event) => setClothingToRegion(event.target.value as SizeRegion)}>
                      <option value="eu">EU</option>
                      <option value="us">US</option>
                      <option value="uk">UK</option>
                    </Select>
                  </FieldLabel>
                </div>
                <ResultCard label="Mapped size" value={convertedClothingSize} hint="Use the region selectors to compare standard equivalents quickly." />
              </div>
            </div>
          ) : null}

          {activeCategory === 'mattress' ? (
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Mattress</p>
                <Heading level={3} className="text-3xl font-extralight tracking-tight text-zinc-950 dark:text-white">
                  Mattress size guide
                </Heading>
                <Text className="text-base/7 text-zinc-600 dark:text-zinc-300">
                  Check mattress dimensions in centimeters and inches before you buy or plan a room.
                </Text>
              </div>

              <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_20rem]">
                <div className="grid gap-4 md:grid-cols-2">
                  <FieldLabel label="Region">
                    <Select value={mattressRegion} onChange={(event) => handleMattressRegionChange(event.target.value as MattressRegion)}>
                      <option value="us">US</option>
                      <option value="eu">EU</option>
                    </Select>
                  </FieldLabel>
                  <FieldLabel label="Size">
                    <Select value={mattressType} onChange={(event) => setMattressType(event.target.value as MattressType)}>
                      {mattressOptions.map(([value, definition]) => (
                        <option key={value} value={value}>
                          {definition.label}
                        </option>
                      ))}
                    </Select>
                  </FieldLabel>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <ResultCard label="Dimensions (cm)" value={selectedMattress.cm} />
                  <ResultCard label="Dimensions (in)" value={selectedMattress.inches} />
                </div>
              </div>
            </div>
          ) : null}

          {activeCategory === 'appliances' ? (
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="text-xs font-light uppercase tracking-[0.16em] text-zinc-500">Appliances</p>
                <Heading level={3} className="text-3xl font-extralight tracking-tight text-zinc-950 dark:text-white">
                  Appliance size guide
                </Heading>
                <Text className="text-base/7 text-zinc-600 dark:text-zinc-300">
                  Compare common appliance footprints and capacities to see what will fit in your space.
                </Text>
              </div>

              <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_20rem]">
                <div className="grid gap-4 md:grid-cols-2">
                  <FieldLabel label="Appliance">
                    <Select value={applianceType} onChange={(event) => setApplianceType(event.target.value as ApplianceType)}>
                      <option value="washer">Washing machine</option>
                      <option value="dryer">Dryer</option>
                      <option value="refrigerator">Refrigerator</option>
                      <option value="dishwasher">Dishwasher</option>
                      <option value="oven">Oven</option>
                    </Select>
                  </FieldLabel>
                  <FieldLabel label="Size range">
                    <Select value={applianceSize} onChange={(event) => setApplianceSize(event.target.value as ApplianceSize)}>
                      <option value="compact">Compact</option>
                      <option value="standard">Standard</option>
                      <option value="large">Large</option>
                    </Select>
                  </FieldLabel>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <ResultCard label="Footprint" value={`${selectedAppliance.width} × ${selectedAppliance.depth}`} hint={`Height: ${selectedAppliance.height}`} />
                  <ResultCard label="Capacity" value={selectedAppliance.capacity} hint={`${selectedAppliance.label} ${applianceType.replace('-', ' ')} reference`} />
                </div>
              </div>
            </div>
          ) : null}
          </div>
        </div>
      </section>

      <Footer className="pt-10" />
    </GuidePage>
  )
}

export const Overview: Story = {
  render: () => <UnitConverterExamplePage />,
}
