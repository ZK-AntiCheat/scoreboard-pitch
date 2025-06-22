"use client"
import { Shield, Eye, ArrowRight, AlertTriangle, Zap, Lock, Home, DollarSign, Video } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function PitchPage() {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="p-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-6 h-6 bg-gradient-to-br from-pink-400 to-purple-500 rotate-45"></div>
            <span className="text-xl font-bold high-contrast-text">ZK Anti-Cheat</span>
          </Link>
          <Link href="/">
            <Button variant="ghost" className="medium-contrast-text hover:text-white hover:bg-white/20">
              <Home className="w-4 h-4 mr-2" />
              Scoreboard
            </Button>
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto p-6">
        {/* Hero Section */}
        <section className="text-center py-20">
          <div className="mb-8">
            <Badge className="bg-red-600/30 text-red-100 border-red-400/50 mb-4">
              <AlertTriangle className="w-4 h-4 mr-2" />
              Privacy Crisis
            </Badge>
            <h1 className="text-6xl font-bold mb-6">
              <span className="high-contrast-text">Anti-Cheat Engines Are</span>
              <br />
              <span className="text-red-400">Spying On You</span>
            </h1>
            <p className="text-xl medium-contrast-text max-w-3xl mx-auto leading-relaxed">
              Traditional anti-cheat systems install kernel-level malware on your computer, monitor everything you do,
              and harvest your personal data. It's time for a privacy-first solution.
            </p>
          </div>
          <div className="flex justify-center space-x-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
            >
              <Shield className="w-5 h-5 mr-2" />
              See The Solution
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 hover:bg-white/10">
              <Eye className="w-5 h-5 mr-2" />
              Watch Demo
            </Button>
          </div>
        </section>

        {/* Market Size Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold high-contrast-text mb-4">A Multi-Billion Dollar Problem</h2>
            <p className="text-lg medium-contrast-text max-w-2xl mx-auto">
              The anti-cheat industry is worth billions, yet it's built on invasive surveillance that violates user
              privacy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="glass-card border-green-400/30">
              <CardHeader>
                <CardTitle className="text-green-200 flex items-center">
                  <DollarSign className="w-6 h-6 mr-3" />
                  $3.2B Market Size
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="medium-contrast-text">
                  The global anti-cheat software market is projected to reach $3.2 billion by 2028, driven by the
                  explosive growth of competitive gaming and esports.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-purple-400/30">
              <CardHeader>
                <CardTitle className="text-purple-200 flex items-center">
                  <Video className="w-6 h-6 mr-3" />
                  Speedrunning & Streaming
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="medium-contrast-text">
                  Live speedrunning streams need real-time cheat verification without revealing strategies or
                  compromising privacy - perfect for ZK proofs.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-red-400/30">
              <CardHeader>
                <CardTitle className="text-red-200 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-3" />
                  Privacy Invasion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="medium-contrast-text">
                  Current solutions require kernel-level access, constant monitoring, and data harvesting - violating
                  user privacy for profit.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Problem Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold high-contrast-text mb-4">The Anti-Cheat Problem</h2>
            <p className="text-lg medium-contrast-text max-w-2xl mx-auto">
              Modern anti-cheat engines have become invasive surveillance tools that violate user privacy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="glass-card border-red-400/30">
              <CardHeader>
                <CardTitle className="text-red-200 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-3" />
                  Kernel-Level Access
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="medium-contrast-text">
                  Anti-cheat engines run with the highest system privileges, giving them access to everything on your
                  computer - files, processes, network traffic, and more.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-red-400/30">
              <CardHeader>
                <CardTitle className="text-red-200 flex items-center">
                  <Eye className="w-6 h-6 mr-3" />
                  Constant Monitoring
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="medium-contrast-text">
                  These systems continuously scan your system, monitor running processes, and collect data about your
                  behavior - even when you're not gaming.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-red-400/30">
              <CardHeader>
                <CardTitle className="text-red-200 flex items-center">
                  <Shield className="w-6 h-6 mr-3" />
                  Data Harvesting
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="medium-contrast-text">
                  Your personal information, system configuration, and usage patterns are collected and transmitted to
                  game companies and third parties.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Case Study Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold high-contrast-text mb-4">Real-World Consequences</h2>
            <p className="text-lg medium-contrast-text max-w-2xl mx-auto">
              The Call of Duty incident that exposed how broken traditional anti-cheat systems really are
            </p>
          </div>

          <Card className="glass-card border-yellow-400/30 mb-8">
            <CardContent className="p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-600/30 rounded-full flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-6 h-6 text-yellow-200" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold high-contrast-text mb-4">The Call of Duty Malware Ban Incident</h3>
                  <div className="space-y-4 medium-contrast-text">
                    <p>Call of duty players were being banned randomly for no obvious reason.</p>
                    {/* Call of Duty Images */}
                    <div className="mb-8 space-y-6">
                      <div className="bg-black/40 rounded-lg p-4 border border-yellow-400/30">
                        <Image
                          src="/cod-headline.png"
                          alt="News headline: Hacker says they banned thousands of Call of Duty gamers by abusing anti-cheat flaw"
                          width={800}
                          height={200}
                          className="rounded-lg mx-auto"
                        />
                      </div>
                      <div className="bg-black/40 rounded-lg p-4 border border-red-400/30">
                        <Image
                          src="/cod-explanation.png"
                          alt="Technical explanation of how the Call of Duty anti-cheat flaw worked through game memory"
                          width={600}
                          height={100}
                          className="rounded-lg mx-auto"
                        />
                      </div>
                    </div>
                    <p>
                      This incident proved that anti-cheat engines are scanning private communications and making
                      automated decisions that can destroy players' accounts and gaming investments. WE CAN DO BETTER!
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="glass-card border-yellow-400/30">
              <CardHeader>
                <CardTitle className="text-yellow-200 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-3" />
                  1. What Happened?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="medium-contrast-text">
                  Hackers discovered a vulnerability in Call of Duty's anti-cheat system that allowed them to trigger
                  false bans on other players.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-yellow-400/30">
              <CardHeader>
                <CardTitle className="text-yellow-200 flex items-center">
                  <AlertTriangle className="w-6 h-6 mr-3" />
                  2. The Real Problem
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="medium-contrast-text">
                  The anti-cheat system had too much power and was making automated decisions without human oversight,
                  leading to unjust consequences for innocent players.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Demo Section */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold high-contrast-text mb-4">Live Cheat Detection Demo</h2>
            <p className="text-lg medium-contrast-text max-w-2xl mx-auto">
              See our ZK anti-cheat engine detect X-ray cheats in Minecraft through memory signature analysis
            </p>
          </div>

          <Card className="glass-card">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold high-contrast-text mb-4">X-Ray Cheat Detection in Minecraft</h3>
                <div className="space-y-6 mb-6">
                  <div className="bg-black/40 rounded-lg p-4 border border-red-400/30">
                    <Image
                      src="/minecraft-xray-demo.png"
                      alt="Minecraft X-ray cheat showing transparent blocks and visible underground structures"
                      width={600}
                      height={300}
                      className="rounded-lg mx-auto"
                    />
                    <p className="text-sm medium-contrast-text mt-2">
                      X-ray cheat allows players to see through blocks, revealing hidden ores and structures
                    </p>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4 border border-red-400/30">
                    <Image
                      src="/xray-memory-signatures.png"
                      alt="Console output showing X-ray cheat memory signatures and invalid texture loading patterns"
                      width={600}
                      height={300}
                      className="rounded-lg mx-auto"
                    />
                    <p className="text-sm medium-contrast-text mt-2">
                      Memory signatures: Invalid texture references and X-ray file paths detected in game memory
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h4 className="font-semibold high-contrast-text mb-2">Evil Signatures Detected:</h4>
                    <ul className="space-y-2 medium-contrast-text text-sm">
                      <li>• Invalid texture loading patterns in memory</li>
                      <li>• X-ray specific file paths: "block/xray/*"</li>
                      <li>• Missing texture references for cheat models</li>
                      <li>• Abnormal rendering pipeline modifications</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold high-contrast-text mb-2">Cryptographic Detection:</h4>
                    <ul className="space-y-2 medium-contrast-text text-sm">
                      <li>• Merkle tree contains cheat signatures</li>
                      <li>• Proof of inclusion for evil memory patterns</li>
                      <li>• Invalid texture values trigger detection</li>
                      <li>• Tamper-proof evidence on Aztec Network</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Our Solution */}
        <section className="py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold high-contrast-text mb-4">Our Solution</h2>
            <p className="text-lg medium-contrast-text max-w-2xl mx-auto">
              Zero-knowledge proofs enable privacy-preserving cheat detection - perfect for speedrunning streams and
              competitive gaming
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="glass-card border-purple-400/30">
              <CardHeader>
                <CardTitle className="text-purple-200 flex items-center">
                  <Zap className="w-6 h-6 mr-3" />
                  1. Memory Validation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="medium-contrast-text">
                  Using Noir's recursive proofs, we validate the entire game memory state in a single proof, ensuring no
                  memory manipulation or invalid modifications occurred during gameplay.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-purple-400/30">
              <CardHeader>
                <CardTitle className="text-purple-200 flex items-center">
                  <Lock className="w-6 h-6 mr-3" />
                  2. State Machine Optimization
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="medium-contrast-text">
                  Most game state is static and homogeneous throughout gameplay. We optimize by only checking memory
                  deltas that change, using a state machine approach for maximum efficiency.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card border-purple-400/30">
              <CardHeader>
                <CardTitle className="text-purple-200 flex items-center">
                  <Video className="w-6 h-6 mr-3" />
                  3. Perfect for Streaming
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="medium-contrast-text">
                  Speedrunners can prove legitimacy in real-time during live streams without revealing strategies or
                  compromising privacy - viewers get cryptographic proof of fair play.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Technical Visualization */}
          <div className="mb-16">
            <Card className="glass-card border-purple-400/30">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold high-contrast-text mb-6 text-center">
                  Memory Validation with Merkle Trees
                </h3>
                <div className="bg-black/40 rounded-lg p-6 mb-6 border border-purple-400/30">
                  <Image
                    src="/merkle-tree-diagram.png"
                    alt="Diagram showing transformation from hexdump memory data to Merkle tree structure - raw hex values on left become cryptographic hash nodes in binary tree on right"
                    width={600}
                    height={400}
                    className="rounded-lg mx-auto"
                  />
                </div>
                {/* Add this new section */}
                <div className="bg-black/40 rounded-lg p-6 mb-6 border border-green-400/30">
                  <h4 className="font-semibold high-contrast-text mb-4 text-center">Real Memory Dump Analysis</h4>
                  <Image
                    src="/memory-dump-output.png"
                    alt="Terminal output showing memory dump analysis with hexadecimal addresses, memory regions, and binary file extraction"
                    width={800}
                    height={500}
                    className="rounded-lg mx-auto"
                  />
                  <p className="text-sm medium-contrast-text mt-4 text-center">
                    Live memory dump showing 1012.76 MB across 11 regions - including "VERY INTERESTING" anonymous
                    memory and executable code modifications that indicate potential cheats
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div>
                    <h4 className="font-semibold high-contrast-text mb-3">How It Works:</h4>
                    <ul className="space-y-2 medium-contrast-text text-sm">
                      <li>• Game memory is captured and analyzed in real-time</li>
                      <li>• 1012.76 MB across 11 memory regions dumped to binary files</li>
                      <li>• "VERY INTERESTING" anonymous memory regions flagged</li>
                      <li>• Executable code modifications detected and analyzed</li>
                      <li>• Memory chunks are hashed into Merkle tree leaf nodes</li>
                      <li>• Single root hash represents entire memory state</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold high-contrast-text mb-3">Evil Signature Detection:</h4>
                    <ul className="space-y-2 medium-contrast-text text-sm">
                      <li>• Cheat patterns create unique memory signatures</li>
                      <li>• Inclusion proofs show evil signatures in tree</li>
                      <li>• Recursive proofs validate entire tree structure</li>
                      <li>• Tamper-proof evidence on Aztec Network</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold high-contrast-text mb-6">The Future of Gaming is Private</h2>
            <p className="text-xl medium-contrast-text mb-8">
              Join us in building a gaming ecosystem where players can prove their legitimacy without sacrificing their
              privacy or security. Perfect for the multi-billion dollar anti-cheat market and live streaming.
            </p>
            <div className="flex justify-center space-x-4">
              <Link href="/">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  View Live Scoreboard
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Button
                variant="outline"
                size="lg"
                className="border-white/20 hover:bg-white/10"
                onClick={() => window.open("https://github.com/orgs/ZK-AntiCheat/repositories", "_blank")}
              >
                <Eye className="w-5 h-5 mr-2" />
                GitHub Repository
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
