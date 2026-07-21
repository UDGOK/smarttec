// Model architecture database for the VRAM/throughput calculator.
// Numbers come from published model configs (HuggingFace / vendor release notes).
// Quant factors: 16=2.0 (FP16), 8=1.0 (FP8), 4=0.5 (INT4/GPTQ), etc.

export interface ModelSpec {
  id: string;
  family: string;
  name: string;
  params_b: number;
  num_layers: number;
  num_kv_heads: number;
  head_dim: number;
  hidden_size: number;
  context_window: number;
  is_moe?: boolean;
  active_params_b?: number; // MoE: params activated per token (drives compute + per-token weight reads)
  num_experts?: number;
  active_experts?: number;
  blurb: string;
}

export const MODELS: ModelSpec[] = [
  // Llama 3.x
  { id: "llama-3.1-8b",        family: "Llama 3.1", name: "8B",     params_b: 8,    num_layers: 32,  num_kv_heads: 8,    head_dim: 128, hidden_size: 4096,  context_window: 131072, blurb: "Open weights. Production default for most teams." },
  { id: "llama-3.1-70b",       family: "Llama 3.1", name: "70B",    params_b: 70,   num_layers: 80,  num_kv_heads: 8,    head_dim: 128, hidden_size: 8192,  context_window: 131072, blurb: "Strong general-purpose. ~140 GB at FP16." },
  { id: "llama-3.1-405b",      family: "Llama 3.1", name: "405B",   params_b: 405,  num_layers: 126, num_kv_heads: 8,    head_dim: 128, hidden_size: 16384, context_window: 131072, blurb: "Frontier. ~810 GB FP16 — needs multi-node or CS-3." },
  // Mistral
  { id: "mistral-7b",          family: "Mistral",   name: "7B",     params_b: 7,    num_layers: 32,  num_kv_heads: 8,    head_dim: 128, hidden_size: 4096,  context_window: 32768,  blurb: "The OG open-weights baseline." },
  { id: "mistral-nemo-12b",    family: "Mistral",   name: "Nemo 12B", params_b: 12, num_layers: 40,  num_kv_heads: 8,    head_dim: 128, hidden_size: 5120,  context_window: 131072, blurb: "Mistral + NVIDIA. Multilingual. 128k context." },
  { id: "mistral-small-3.2-24b", family: "Mistral",  name: "Small 3.2 24B", params_b: 24, num_layers: 40, num_kv_heads: 8, head_dim: 128, hidden_size: 5120,  context_window: 131072, blurb: "Apache 2.0. 128k context. Beats Llama 3 70B on most evals." },
  { id: "codestral-22b",       family: "Mistral",   name: "Codestral 22B", params_b: 22, num_layers: 56, num_kv_heads: 8, head_dim: 128, hidden_size: 6144,  context_window: 32768,  blurb: "Code-focused. ~256k context option." },
  // Qwen 2.5
  { id: "qwen-2.5-7b",         family: "Qwen 2.5",  name: "7B",     params_b: 7,    num_layers: 28,  num_kv_heads: 4,    head_dim: 128, hidden_size: 3584,  context_window: 131072, blurb: "Strong multilingual small model." },
  { id: "qwen-2.5-14b",        family: "Qwen 2.5",  name: "14B",    params_b: 14,   num_layers: 48,  num_kv_heads: 8,    head_dim: 128, hidden_size: 5120,  context_window: 131072, blurb: "Mid-size. Often beats 70B-class on math/coding." },
  { id: "qwen-2.5-32b",        family: "Qwen 2.5",  name: "32B",    params_b: 32,   num_layers: 64,  num_kv_heads: 8,    head_dim: 128, hidden_size: 5120,  context_window: 131072, blurb: "Dense 32B. Best-in-class at its size." },
  { id: "qwen-2.5-72b",        family: "Qwen 2.5",  name: "72B",    params_b: 72,   num_layers: 80,  num_kv_heads: 8,    head_dim: 128, hidden_size: 8192,  context_window: 131072, blurb: "Top open-weights model before DeepSeek." },
  { id: "qwen-2.5-coder-32b",  family: "Qwen 2.5",  name: "Coder 32B", params_b: 32, num_layers: 64, num_kv_heads: 8, head_dim: 128, hidden_size: 5120, context_window: 131072, blurb: "Code-focused Qwen. Strong on agentic coding tasks." },
  // DeepSeek
  { id: "deepseek-v3",         family: "DeepSeek",  name: "V3",     params_b: 671,  active_params_b: 37, num_layers: 61,  num_kv_heads: 1,    head_dim: 288, /* MLA-effective: (512+64)x2B per layer-token */ hidden_size: 7168,  context_window: 131072, blurb: "MoE frontier. 671B total / 37B active. Foundation of the 2025 reasoning wave.", is_moe: true, num_experts: 256, active_experts: 8 },
  { id: "deepseek-r1",         family: "DeepSeek",  name: "R1",     params_b: 671,  active_params_b: 37, num_layers: 61,  num_kv_heads: 1,    head_dim: 288, /* MLA-effective */ hidden_size: 7168,  context_window: 131072, blurb: "Reasoning-tuned. Same MoE arch as V3.", is_moe: true, num_experts: 256, active_experts: 8 },
  { id: "deepseek-r1-distill-70b", family: "DeepSeek", name: "R1 Distill 70B", params_b: 70, num_layers: 80, num_kv_heads: 8, head_dim: 128, hidden_size: 8192, context_window: 131072, blurb: "Distilled reasoning in a 70B Llama-class form factor." },
  // Gemma 2
  { id: "gemma-2-9b",          family: "Gemma 2",   name: "9B",     params_b: 9,    num_layers: 42,  num_kv_heads: 8,    head_dim: 256, hidden_size: 3584,  context_window: 8192,   blurb: "Google's small flagship. Strong at short-context." },
  { id: "gemma-2-27b",         family: "Gemma 2",   name: "27B",    params_b: 27,   num_layers: 46,  num_kv_heads: 16,   head_dim: 128, hidden_size: 4608,  context_window: 8192,   blurb: "Google's mid-tier. License-restricted (not for commercial training distill)." },
  // Phi
  { id: "phi-3.5-mini",        family: "Phi",       name: "3.5 Mini", params_b: 3.8, num_layers: 32, num_kv_heads: 32, head_dim: 96, /* full MHA */ hidden_size: 3072, context_window: 131072, blurb: "Microsoft's tiny long-context model. Surprisingly capable." },
  { id: "phi-4",               family: "Phi",       name: "Phi-4 14B", params_b: 14, num_layers: 40, num_kv_heads: 10, head_dim: 128, hidden_size: 5120, context_window: 16384, blurb: "Microsoft reasoning + math. MIT license." },
  // Llama 3.3 / Llama 4
  { id: "llama-3.3-70b",       family: "Llama 3.3", name: "70B",    params_b: 70,   num_layers: 80,  num_kv_heads: 8,    head_dim: 128, hidden_size: 8192,  context_window: 131072, blurb: "Llama 3.1 70B arch, instruction-tuned to near-405B quality." },
  { id: "llama-4-scout",       family: "Llama 4",   name: "Scout 109B", params_b: 109, active_params_b: 17, num_layers: 48, num_kv_heads: 8,  head_dim: 128, hidden_size: 5120,  context_window: 131072, blurb: "MoE 109B total / 17B active, 16 experts. Up to 10M context claimed via iRoPE; 128k modeled here.", is_moe: true, num_experts: 16, active_experts: 1 },
  { id: "llama-4-maverick",    family: "Llama 4",   name: "Maverick 400B", params_b: 400, active_params_b: 17, num_layers: 48, num_kv_heads: 8, head_dim: 128, hidden_size: 5120, context_window: 131072, blurb: "MoE 400B total / 17B active, 128 experts. Meta's open flagship.", is_moe: true, num_experts: 128, active_experts: 1 },
  // Qwen 3 (Apr 2025)
  { id: "qwen3-8b",            family: "Qwen 3",    name: "8B",     params_b: 8,    num_layers: 36,  num_kv_heads: 8,    head_dim: 128, hidden_size: 4096,  context_window: 131072, blurb: "Hybrid thinking modes. Strong small model of 2025." },
  { id: "qwen3-32b",           family: "Qwen 3",    name: "32B",    params_b: 32,   num_layers: 64,  num_kv_heads: 8,    head_dim: 128, hidden_size: 5120,  context_window: 131072, blurb: "Dense flagship. Reasoning toggle built in." },
  { id: "qwen3-235b-a22b",     family: "Qwen 3",    name: "235B-A22B", params_b: 235, active_params_b: 22, num_layers: 94, num_kv_heads: 4,   head_dim: 128, hidden_size: 4096,  context_window: 131072, blurb: "MoE 235B total / 22B active, 128 experts. Alibaba's frontier open model.", is_moe: true, num_experts: 128, active_experts: 8 },
  // OpenAI GPT-OSS (Aug 2025)
  { id: "gpt-oss-20b",         family: "GPT-OSS",   name: "20B",    params_b: 21, active_params_b: 3.6,   num_layers: 24,  num_kv_heads: 8,    head_dim: 64,  hidden_size: 2880,  context_window: 131072, blurb: "OpenAI open weights. MoE 21B / 3.6B active. Runs on a single 24 GB card at MXFP4.", is_moe: true, num_experts: 32, active_experts: 4 },
  { id: "gpt-oss-120b",        family: "GPT-OSS",   name: "120B",   params_b: 117, active_params_b: 5.1,  num_layers: 36,  num_kv_heads: 8,    head_dim: 64,  hidden_size: 2880,  context_window: 131072, blurb: "OpenAI open weights. MoE 117B / 5.1B active. o4-mini-class reasoning, fits one H100 at MXFP4.", is_moe: true, num_experts: 128, active_experts: 4 },
  // Moonshot Kimi K2 (Jul 2025)
  { id: "kimi-k2",             family: "Kimi",      name: "K2 1T",  params_b: 1000, active_params_b: 32, num_layers: 61,  num_kv_heads: 1,    head_dim: 288, /* MLA-effective */ hidden_size: 7168,  context_window: 131072, blurb: "MoE 1T total / 32B active, 384 experts. DeepSeek-style MLA. Agentic-coding standout.", is_moe: true, num_experts: 384, active_experts: 8 },
  // Gemma 3 (Mar 2025)
  { id: "gemma-3-27b",         family: "Gemma 3",   name: "27B",    params_b: 27,   num_layers: 62,  num_kv_heads: 16,   head_dim: 128, hidden_size: 5376,  context_window: 131072, blurb: "Google's open flagship. 128k context, multimodal, strong multilingual." },
];

export interface GpuSpec {
  id: string;
  label: string;
  vram_gb: number;
  bf16_tflops: number; // dense BF16/FP16 TFLOPS
  mem_bw_gbps: number; // memory bandwidth in GB/s
  unit_price_hr: number; // market on-demand $/GPU-hr
  notes: string;
}

export const GPUS: GpuSpec[] = [
  { id: "H100", label: "H100 80GB SXM",    vram_gb: 80,  bf16_tflops: 495,  mem_bw_gbps: 3350, unit_price_hr: 2.40, notes: "8 GPUs per node via NVLink + IB" },
  { id: "H200", label: "H200 141GB SXM",   vram_gb: 141, bf16_tflops: 495,  mem_bw_gbps: 4800, unit_price_hr: 3.20, notes: "Same compute, 76% more memory bandwidth" },
  { id: "B200", label: "B200 192GB SXM",   vram_gb: 192, bf16_tflops: 2250, mem_bw_gbps: 8000, unit_price_hr: 4.80, notes: "Blackwell. 4th-gen Tensor Cores" },
  { id: "MI455X", label: "AMD MI455X 432GB · Phase 2/3 eval", vram_gb: 432, bf16_tflops: 5000, mem_bw_gbps: 19600, unit_price_hr: 0, notes: "CDNA5 · 432GB HBM4 · 19.6 TB/s — 2.4x B200 bandwidth. Ships H2 2026; SmartTec Phase 2/3 evaluation. Pricing at OEM availability. BF16 estimated (AMD publishes FP4/FP8 only)." },
  { id: "GB200", label: "GB200 NVL72 rack", vram_gb: 13824, bf16_tflops: 162000, mem_bw_gbps: 576000, unit_price_hr: 345.60, notes: "72 Blackwell + 36 Grace. 13.5 TB HBM3e. Priced per rack-hour (72 GPUs). Reference only — not in Phase-1 fleet." },
  { id: "CS-3", label: "Cerebras CS-3 system", vram_gb: 1200, bf16_tflops: 125000, mem_bw_gbps: 21000, unit_price_hr: 0.04, notes: "Wafer-scale. Per-1K-tokens billing, not per-hour.", },
];

export const QUANTS = [
  { id: "fp16",  label: "FP16 / BF16", bytesPerParam: 2, blurb: "Default. Highest quality." },
  { id: "fp8",   label: "FP8 (E4M3)", bytesPerParam: 1, blurb: "Half the VRAM. ~99% quality retention." },
  { id: "int8",  label: "INT8 (GPTQ/AWQ)", bytesPerParam: 1, blurb: "Half the VRAM of FP16. ~99% quality retention." },
  { id: "int4",  label: "INT4 (GPTQ/AWQ)", bytesPerParam: 0.5, blurb: "Quarter the VRAM. Some quality loss." },
] as const;

export type QuantId = typeof QUANTS[number]["id"];

export function modelVRAM(model: ModelSpec, quantBytes: number): number {
  // Pure weights — utilization is applied separately to keep one source of truth.
  return model.params_b * quantBytes;
}

export function kvCacheGB(
  model: ModelSpec,
  seqLen: number,
  batchSize: number,
  dtypeBytes = 2
): number {
  // KV cache = 2 (K+V) * layers * kv_heads * head_dim * seq_len * dtype_bytes * batch
  return (2 * model.num_layers * model.num_kv_heads * model.head_dim * seqLen * dtypeBytes * batchSize) / (1024 ** 3);
}

// Standard vLLM utilization headroom — CUDA context + activations + safety margin.
const UTILIZATION = 0.92;

export function usableVRAM(gpuVramGB: number): number {
  return gpuVramGB * UTILIZATION;
}

export function totalVRAM(
  model: ModelSpec,
  quantBytes: number,
  seqLen: number,
  batchSize: number
): number {
  return modelVRAM(model, quantBytes) + kvCacheGB(model, seqLen, batchSize, 2);
}

export function maxConcurrentSeqs(
  model: ModelSpec,
  quantBytes: number,
  gpuVramGB: number,
  seqLen: number
): number {
  const weights = modelVRAM(model, quantBytes);
  const kvPer = kvCacheGB(model, seqLen, 1, 2);
  const usable = usableVRAM(gpuVramGB);
  if (weights + kvPer > usable) return 0;
  return Math.max(1, Math.floor((usable - weights) / kvPer));
}

export function estimatedTokensPerSec(
  model: ModelSpec,
  gpu: GpuSpec,
  batchSize: number,
  seqLen: number
): number {
  // Roofline: total tokens/sec = min(memory-bound x batch, compute-bound ceiling)
  // MoE: per-token work is driven by ACTIVE params (weights touched per token), not total.
  const effParams = model.active_params_b ?? model.params_b;
  const paramsBytesGB = effParams * 2; // fp16 active weights read per token
  // Memory-bound per sequence: one active-weight sweep per decoded token
  const memBoundPerSeq = (gpu.mem_bw_gbps) / paramsBytesGB;
  // Compute ceiling (batch-independent): 2 FLOPs per active param per token
  const computeCeiling = (gpu.bf16_tflops * 1e12) / (2 * effParams * 1e9);
  // 0.6 = practical serving efficiency (kernel/comms overhead vs peak)
  return Math.min(memBoundPerSeq * 0.6 * batchSize, computeCeiling * 0.6);
}

export function generateDeployCommand(
  model: ModelSpec,
  gpu: GpuSpec,
  quantBytes: number,
  tensorParallel: number,
  seqLen: number
): string {
  const quantLabel = quantBytes === 2 ? "fp16" : quantBytes === 1 ? "fp8" : "int4";
  if (gpu.id === "CS-3") {
    // Cerebras uses its own SDK
    return `# Cerebras SDK — model + CS-3 system
from cerebras.cloud.sdk import Cerebras

client = Cerebras(api_key=os.environ["CEREBRAS_API_KEY"])

stream = client.chat.completions.create(
    model="${model.family.toLowerCase().replace(/[ .]/g, "-")}-${model.name.toLowerCase()}",
    messages=[{"role": "user", "content": "..."}],
    max_tokens=${Math.min(seqLen, 8192)},
    stream=True,
)
for chunk in stream:
    print(chunk.choices[0].delta.content or "", end="")`;
  }

  // NVIDIA GPUs use vLLM
  return `# vLLM — ${model.family} ${model.name} on ${tensorParallel}× ${gpu.id}
# Pricing: ${gpu.unit_price_hr > 0 ? `~$${(gpu.unit_price_hr * tensorParallel).toFixed(2)}/hr · ~$${(gpu.unit_price_hr * tensorParallel * 730).toFixed(0)}/mo 24/7` : "at OEM availability (Phase-2 evaluation hardware)"}
docker run --gpus all --shm-size 1g \\
  -p 8000:8000 \\
  -v ~/.cache/huggingface:/root/.cache/huggingface \\
  vllm/vllm-openai:latest \\
  --model ${model.id} \\
  --tensor-parallel-size ${tensorParallel} \\
  --max-model-len ${seqLen} \\
  --quantization ${quantLabel === "fp8" ? "fp8" : quantLabel === "int4" ? "awq" : "none"} \\
  --gpu-memory-utilization 0.92`;
}

export function recommendedTensorParallelRaw(
  model: ModelSpec,
  quantBytes: number,
  gpu: GpuSpec,
  seqLen: number = 4096
): number {
  const weightsGB = modelVRAM(model, quantBytes);
  const kvPerSeqGB = kvCacheGB(model, seqLen, 1, 2);
  const minRequiredPerGPU = weightsGB + kvPerSeqGB;
  const usable = usableVRAM(gpu.vram_gb);
  if (minRequiredPerGPU <= usable) return 1;
  // Need ceil(weights + 1 seq KV) / usable GPUs
  return Math.max(2, Math.ceil(minRequiredPerGPU / usable));
}

export function recommendedTensorParallel(
  model: ModelSpec, quantBytes: number, gpu: GpuSpec, seqLen: number = 4096
): number {
  return saneGpuCount(recommendedTensorParallelRaw(model, quantBytes, gpu, seqLen));
}

// Deployable GPU counts: TP within a node (1/2/4/8), then whole nodes.
const GPU_LADDER = [1, 2, 4, 8, 16, 24, 32, 48, 64];
export function saneGpuCount(raw: number): number {
  for (const n of GPU_LADDER) if (n >= raw) return n;
  return Math.ceil(raw / 8) * 8;
}

export interface FleetOption {
  gpu: GpuSpec;
  count: number;
  monthly: number;      // $ at 730h
  totalGB: number;      // memory needed
  capacityGB: number;   // usable across the config
  tps: number;          // aggregate est. tokens/sec at requested batch
  fits: boolean;
}

// Auto-config: cheapest deployable configuration per GPU type across the fleet.
export function fleetRecommendations(
  model: ModelSpec,
  quantBytes: number,
  seqLen: number,
  batchSize: number
): FleetOption[] {
  const opts: FleetOption[] = [];
  for (const gpu of GPUS) {
    if (gpu.id === "CS-3") continue; // per-token product, not a GPU count
    if (gpu.unit_price_hr <= 0) continue; // evaluation hardware without street pricing (e.g. MI455X) — fit-checkable, not rankable
    const totalGB = modelVRAM(model, quantBytes) + kvCacheGB(model, seqLen, batchSize, 2);
    const raw = Math.ceil(totalGB / usableVRAM(gpu.vram_gb));
    const count = saneGpuCount(raw);
    const scaled: GpuSpec = { ...gpu, mem_bw_gbps: gpu.mem_bw_gbps * count, bf16_tflops: gpu.bf16_tflops * count };
    const tps = estimatedTokensPerSec(model, scaled, batchSize, seqLen);
    opts.push({
      gpu, count,
      monthly: Math.round(gpu.unit_price_hr * count * 730),
      totalGB, capacityGB: usableVRAM(gpu.vram_gb) * count,
      tps, fits: totalGB <= usableVRAM(gpu.vram_gb) * count,
    });
  }
  return opts.sort((a, b) => a.monthly - b.monthly);
}
