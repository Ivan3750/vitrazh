import { Bug, Layers, Blinds, ShieldCheck, DoorOpen, Thermometer, Volume2, Lock, Sun, Ruler, Truck, Wrench, BadgeCheck, Phone, Mail, MapPin, Clock, Send, MessageCircle, Instagram, Check, ChevronRight, Menu, X, SlidersHorizontal, Factory, Handshake, Award, Calculator, ShoppingCart, ShoppingBag, ArrowRight, Search, Plus, Minus, Trash2, ChevronDown } from "lucide-react";

const MAP = { bug: Bug, layers: Layers, blinds: Blinds, shield: ShieldCheck, door: DoorOpen, thermo: Thermometer, sound: Volume2, lock: Lock, sun: Sun, ruler: Ruler, truck: Truck, wrench: Wrench, badge: BadgeCheck, phone: Phone, mail: Mail, pin: MapPin, clock: Clock, send: Send, chat: MessageCircle, insta: Instagram, check: Check, chevron: ChevronRight, menu: Menu, x: X, filter: SlidersHorizontal, factory: Factory, handshake: Handshake, award: Award, calc: Calculator, cart: ShoppingCart, bag: ShoppingBag, ShoppingBag, arrow: ArrowRight, search: Search, plus: Plus, minus: Minus, trash: Trash2, down: ChevronDown };

export default function Icon({ name, size = 20, className = "" }) {
  const C = MAP[name] ?? Check;
  return <C size={size} className={className} aria-hidden="true" />;
}
