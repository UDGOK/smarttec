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
  { id: "mistral-small-24b",   family: "Mistral",   name: "Small 24B", params_b: 24, num_layers: 40, num_kv_heads: 8,    head_dim: 128, hidden_size: 6144,  context_window: 32768,  blurb: "Apache 2.0. Beats Llama 3 70B on most evals." },
  { id: "codestral-22b",       family: "Mistral",   name: "Codestral 22B", params_b: 22, num_layers: 56, num_kv_heads: 8, head_dim: 128, hidden_size: 6144,  context_window: 32768,  blurb: "Code-focused. ~256k context option." },
  // Qwen 2.5
  { id: "qwen-2.5-7b",         family: "Qwen 2.5",  name: "7B",     params_b: 7,    num_layers: 28,  num_kv_heads: 4,    head_dim: 128, hidden_size: 3584,  context_window: 131072, blurb: "Strong multilingual small model." },
  { id: "qwen-2.5-14b",        family: "Qwen 2.5",  name: "14B",    params_b: 14,   num_layers: 48,  num_kv_heads: 8,    head_dim: 128, hidden_size: 5120,  context_window: 131072, blurb: "Mid-size. Often beats 70B-class on math/coding." },
  { id: "qwen-2.5-32b",        family: "Qwen 2.5",  name: "32B",    params_b: 32,   num_layers: 64,  num_kv_heads: 8,    head_dim: 128, hidden_size: 5120,  context_window: 131072, blurb: "Dense 32B. Best-in-class at its size." },
  { id: "qwen-2.5-72b",        family: "Qwen 2.5",  name: "72B",    params_b: 72,   num_layers: 80,  num_kv_heads: 8,    head_dim: 128, hidden_size: 8192,  context_window: 131072, blurb: "Top open-weights model before DeepSeek." },
  { id: "qwen-2.5-coder-32b",  family: "Qwen 2.5",  name: "Coder 32B", params_b: 32, num_layers: 64, num_kv_heads: 8, head_dim: 128, hidden_size: 5120, context_window: 131072, blurb: "Code-focused Qwen. Strong on agentic coding tasks." },
  // DeepSeek
  { id: "deepseek-v3",         family: "DeepSeek",  name: "V3",     params_b: 671,  num_layers: 61,  num_kv_heads: 128,  head_dim: 128, hidden_size: 7168,  context_window: 65536,  blurb: "MoE frontier. 671B total / 37B active. Best open model on most evals.", is_moe: true, num_experts: 256, active_experts: 8 },
  { id: "deepseek-r1",         family: "DeepSeek",  name: "R1",     params_b: 671,  num_layers: 61,  num_kv_heads: 128,  head_dim: 128, hidden_size: 7168,  context_window: 65536,  blurb: "Reasoning-tuned. Same MoE arch as V3.", is_moe: true, num_experts: 256, active_experts: 8 },
  { id: "deepseek-r1-distill-70b", family: "DeepSeek", name: "R1 Distill 70B", params_b: 70, num_layers: 80, num_kv_heads: 8, head_dim: 128, hidden_size: 8192, context_window: 131072, blurb: "Distilled reasoning in a 70B Llama-class form factor." },
  // Gemma 2
  { id: "gemma-2-9b",          family: "Gemma 2",   name: "9B",     params_b: 9,    num_layers: 42,  num_kv_heads: 4,    head_dim: 256, hidden_size: 3584,  context_window: 8192,   blurb: "Google's small flagship. Strong at short-context." },
  { id: "gemma-2-27b",         family: "Gemma 2",   name: "27B",    params_b: 27,   num_layers: 46,  num_kv_heads: 16,   head_dim: 128, hidden_size: 4608,  context_window: 8192,   blurb: "Google's mid-tier. License-restricted (not for commercial training distill)." },
  // Phi
  { id: "phi-3.5-mini",        family: "Phi",       name: "3.5 Mini", params_b: 3.8, num_layers: 32, num_kv_heads: 4, head_dim: 96, hidden_size: 3072, context_window: 131072, blurb: "Microsoft's tiny long-context model. Surprisingly capable." },
  { id: "phi-4",               family: "Phi",       name: "Phi-4 14B", params_b: 14, num_layers: 40, num_kv_heads: 10, head_dim: 128, hidden_size: 5120, context_window: 16384, blurb: "Microsoft reasoning + math. MIT license." },
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
  { id: "H100", label: "H100 80GB SXM",    vram_gb: 80,  bf16_tflops: 989,  mem_bw_gbps: 3350, unit_price_hr: 2.40, notes: "8 GPUs per node via NVLink + IB" },
  { id: "H200", label: "H200 141GB SXM",   vram_gb: 141, bf16_tflops: 989,  mem_bw_gbps: 4800, unit_price_hr: 3.20, notes: "Same compute, 76% more memory bandwidth" },
  { id: "B200", label: "B200 192GB SXM",   vram_gb: 192, bf16_tflops: 2250, mem_bw_gbps: 8000, unit_price_hr: 4.80, notes: "Blackwell. 4th-gen Tensor Cores" },
  { id: "GB200", label: "GB200 NVL72 rack", vram_gb: 1320, bf16_tflops: 18000, mem_bw_gbps: 130000, unit_price_hr: 6.40, notes: "72 Blackwell + 36 Grace. Rack-scale." },
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
  // Roofline: tokens/sec = min(memory-bound, compute-bound)
  // Memory-bound: seq_len * batch / (decode latency ≈ ~50ms for big LLM, model is bandwidth-bound on KV)
  // Simplified: tokens/s = min(BW / (params_bytes * batch), TFLOPS * 1e12 / (2 * params * seq_len) * batch)
  const paramsBytes = model.params_b * 2; // assume fp16 weights
  // Forward pass memory: read all weights once + KV per step
  const memBound = (gpu.mem_bw_gbps * 1e9) / (paramsBytes * 1e9); // tokens/sec, ~1 token per weight read
  // Compute bound: forward pass = 2 * params * tokens FLOPs
  const computeBound = (gpu.bf16_tflops * 1e12) / (2 * model.params_b * 1e9) * batchSize;
  // Approximate prefill vs decode: prefill is compute-bound, decode is memory-bound
  // For practical throughput, weight memory bandwidth dominates
  const baseRate = Math.min(memBound * 0.6, computeBound); // 0.6 efficiency factor
  return baseRate * batchSize;
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
# Pricing: ~$${(gpu.unit_price_hr * tensorParallel).toFixed(2)}/GPU-hr · ~$${(gpu.unit_price_hr * tensorParallel * 730).toFixed(0)}/mo 24/7
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

export function recommendedTensorParallel(
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
