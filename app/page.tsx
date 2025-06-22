"use client"

import { useState } from "react"
import { Shield, ShieldAlert, ShieldCheck, Clock, Eye, ChevronDown, ChevronRight, Zap } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import Link from "next/link"

interface Player {
  id: string
  username: string
  score: number
  rank: number
  proofStatus: "verified" | "failed" | "pending"
  gameplayDuration: number // in minutes
  proofHash: string
  timestamp: string
  aztecTxHash?: string
  evilSignature?: {
    detected: boolean
    signature: string
    inclusionProof: string
    merkleRoot: string
  }
}

const mockPlayers: Player[] = [
  {
    id: "1",
    username: "CryptoGamer",
    score: 15420,
    rank: 1,
    proofStatus: "verified",
    gameplayDuration: 45,
    proofHash: "0x7f9fade1c0d57a7af66ab4ead79fade1c0d57a7af66ab4ead7c2c2eb7b11a91385",
    aztecTxHash: "0xaztec1234567890abcdef1234567890abcdef1234567890abcdef1234567890",
    timestamp: "2024-01-15T14:30:00Z",
  },
  {
    id: "2",
    username: "ZKProof_Master",
    score: 14890,
    rank: 2,
    proofStatus: "verified",
    gameplayDuration: 38,
    proofHash: "0x8a1b2c3d4e5f6789abcdef0123456789abcdef0123456789abcdef0123456789",
    aztecTxHash: "0xaztec2345678901bcdef2345678901bcdef2345678901bcdef2345678901b",
    timestamp: "2024-01-15T14:25:00Z",
  },
  {
    id: "3",
    username: "ShadowPlayer",
    score: 13750,
    rank: 3,
    proofStatus: "failed",
    gameplayDuration: 12,
    proofHash: "0x9b2c3d4e5f6789abcdef0123456789abcdef0123456789abcdef0123456789ab",
    aztecTxHash: "0xaztec3456789012cdef3456789012cdef3456789012cdef3456789012cd",
    timestamp: "2024-01-15T14:20:00Z",
    evilSignature: {
      detected: true,
      signature: "0xdeadbeef1337c0de5ca1ab1e",
      inclusionProof: "0x1a2b3c4d5e6f7890abcdef1234567890abcdef1234567890abcdef1234567890",
      merkleRoot: "0xfeedface1234567890abcdef1234567890abcdef1234567890abcdef12345678",
    },
  },
  {
    id: "4",
    username: "QuantumRunner",
    score: 12980,
    rank: 4,
    proofStatus: "verified",
    gameplayDuration: 52,
    proofHash: "0xac3d4e5f6789abcdef0123456789abcdef0123456789abcdef0123456789abcd",
    aztecTxHash: "0xaztec4567890123def4567890123def4567890123def4567890123de",
    timestamp: "2024-01-15T14:15:00Z",
  },
  {
    id: "5",
    username: "NullPointer",
    score: 11650,
    rank: 5,
    proofStatus: "pending",
    gameplayDuration: 28,
    proofHash: "0xbd4e5f6789abcdef0123456789abcdef0123456789abcdef0123456789abcdef",
    timestamp: "2024-01-15T14:10:00Z",
  },
]

function ProofStatusBadge({ status }: { status: Player["proofStatus"] }) {
  switch (status) {
    case "verified":
      return (
        <Badge className="bg-green-600/30 text-green-100 border-green-400/50 hover:bg-green-600/40 font-medium">
          <ShieldCheck className="w-3 h-3 mr-1" />
          Verified
        </Badge>
      )
    case "failed":
      return (
        <Badge className="bg-red-600/30 text-red-100 border-red-400/50 hover:bg-red-600/40 font-medium">
          <ShieldAlert className="w-3 h-3 mr-1" />
          Failed
        </Badge>
      )
    case "pending":
      return (
        <Badge className="bg-yellow-600/30 text-yellow-100 border-yellow-400/50 hover:bg-yellow-600/40 font-medium">
          <Shield className="w-3 h-3 mr-1" />
          Pending
        </Badge>
      )
  }
}

function PlayerRow({ player }: { player: Player }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Card className="mb-4 glass-card hover:bg-black/70 transition-all duration-300">
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="text-3xl font-bold text-purple-300">#{player.rank}</div>
            <div>
              <h3 className="font-semibold text-xl high-contrast-text">{player.username}</h3>
              <div className="flex items-center space-x-3 text-sm medium-contrast-text">
                <Clock className="w-4 h-4" />
                <span>{player.gameplayDuration}m gameplay</span>
                <span>•</span>
                <span>{new Date(player.timestamp).toLocaleString()}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className="text-right">
              <div className="text-3xl font-bold aztec-text-gradient">{player.score.toLocaleString()}</div>
              <div className="text-sm medium-contrast-text">points</div>
            </div>
            <ProofStatusBadge status={player.proofStatus} />
            <Collapsible open={isOpen} onOpenChange={setIsOpen}>
              <CollapsibleTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  className="medium-contrast-text hover:text-white hover:bg-white/20 border border-white/20"
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Proof
                  {isOpen ? <ChevronDown className="w-4 h-4 ml-2" /> : <ChevronRight className="w-4 h-4 ml-2" />}
                </Button>
              </CollapsibleTrigger>
            </Collapsible>
          </div>
        </div>

        <Collapsible open={isOpen} onOpenChange={setIsOpen}>
          <CollapsibleContent className="mt-6 pt-6 border-t border-white/20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-lg high-contrast-text flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-purple-400" />
                  Noir Recursive Proof
                </h4>
                <div className="space-y-3 text-sm">
                  <div>
                    <span className="font-medium medium-contrast-text">Recursive Proof Hash:</span>
                    <div className="font-mono text-xs bg-black/60 p-3 rounded-lg mt-2 break-all high-contrast-text border border-white/20">
                      {player.proofHash}
                    </div>
                  </div>
                  {player.aztecTxHash && (
                    <div>
                      <span className="font-medium medium-contrast-text">Aztec Transaction:</span>
                      <div className="font-mono text-xs bg-purple-900/40 p-3 rounded-lg mt-2 break-all high-contrast-text border border-purple-400/30">
                        {player.aztecTxHash}
                      </div>
                    </div>
                  )}
                  <div>
                    <span className="font-medium medium-contrast-text">Memory Validation:</span>
                    <span className="ml-2 high-contrast-text">
                      {player.proofStatus === "verified" && "Valid memory state - no evil signatures detected"}
                      {player.proofStatus === "pending" && "Memory validation in progress"}
                      {player.proofStatus === "failed" && "Invalid memory state - evil signatures found"}
                    </span>
                  </div>
                </div>
              </div>

              {player.evilSignature && (
                <div className="space-y-4">
                  <h4 className="font-semibold text-lg text-red-200 flex items-center">
                    <ShieldAlert className="w-5 h-5 mr-2" />
                    Evil Signature Detection
                  </h4>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium medium-contrast-text">Detected:</span>
                      <Badge className="ml-2 bg-red-600/30 text-red-100 border-red-400/50">
                        {player.evilSignature.detected ? "Yes" : "No"}
                      </Badge>
                    </div>
                    <div>
                      <span className="font-medium medium-contrast-text">Memory Signature:</span>
                      <div className="font-mono text-xs bg-red-900/40 p-3 rounded-lg mt-2 break-all text-red-100 border border-red-400/50">
                        {player.evilSignature.signature}
                      </div>
                    </div>
                    <div>
                      <span className="font-medium medium-contrast-text">Merkle Inclusion Proof:</span>
                      <div className="font-mono text-xs bg-black/60 p-3 rounded-lg mt-2 break-all high-contrast-text border border-white/20">
                        {player.evilSignature.inclusionProof}
                      </div>
                    </div>
                    <div>
                      <span className="font-medium medium-contrast-text">Memory Tree Root:</span>
                      <div className="font-mono text-xs bg-black/60 p-3 rounded-lg mt-2 break-all high-contrast-text border border-white/20">
                        {player.evilSignature.merkleRoot}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  )
}

export default function ZKAntiCheatScoreboard() {
  const verifiedCount = mockPlayers.filter((p) => p.proofStatus === "verified").length
  const failedCount = mockPlayers.filter((p) => p.proofStatus === "failed").length
  const pendingCount = mockPlayers.filter((p) => p.proofStatus === "pending").length

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center mb-4">
            
            
          </div>
          <h1 className="text-5xl font-bold mb-4">
            <span className="aztec-text-gradient">ZK Anti-Cheat</span>
            <br />
            <span className="high-contrast-text">Scoreboard</span>
          </h1>
          <p className="medium-contrast-text text-lg max-w-2xl mx-auto">
            Privacy-preserving leaderboard with zero-knowledge proof verification on Aztec Network
          </p>
        </div>

        {/* Navigation */}
        <nav className="p-6 border-b border-white/10">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-6 h-6 bg-gradient-to-br from-pink-400 to-purple-500 rotate-45"></div>
              <span className="text-xl font-bold high-contrast-text">ZK Anti-Cheat</span>
            </div>
            <Link href="/pitch">
              <Button variant="ghost" className="medium-contrast-text hover:text-white hover:bg-white/20">
                <Eye className="w-4 h-4 mr-2" />
                View Pitch
              </Button>
            </Link>
          </div>
        </nav>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <Card className="glass-card">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium medium-contrast-text">Total Players</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold high-contrast-text">{mockPlayers.length}</div>
            </CardContent>
          </Card>

          <Card className="glass-card border-green-400/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-green-200">Verified</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-green-200">{verifiedCount}</div>
            </CardContent>
          </Card>

          <Card className="glass-card border-red-400/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-red-200">Failed</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-red-200">{failedCount}</div>
            </CardContent>
          </Card>

          <Card className="glass-card border-yellow-400/50">
            <CardHeader className="pb-3">
              <CardTitle className="text-sm font-medium text-yellow-200">Pending</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-yellow-200">{pendingCount}</div>
            </CardContent>
          </Card>
        </div>

        {/* Player List */}
        <div className="space-y-4 mb-12">
          {mockPlayers.map((player) => (
            <PlayerRow key={player.id} player={player} />
          ))}
        </div>

        {/* Info Section */}
        <Card className="glass-card">
          <CardContent className="p-8">
            <h3 className="font-semibold text-xl high-contrast-text mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-purple-400" />
              How Privacy-Preserving Anti-Cheat Works
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 medium-contrast-text">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Players generate zero-knowledge proofs validating memory state without revealing game data
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  State machine optimization only checks memory deltas, as most game state remains static and
                  homogeneous
                </li>
              </ul>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Evil signatures are detected through cryptographic proof of inclusion in memory Merkle trees
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                  Recursive proofs on Aztec Network provide efficient verification without compromising privacy
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
